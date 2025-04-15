import { useState, useEffect } from 'react'

import { URL, TOKEN } from './conf'
import './App.css'

const formatDate = (date: string) => new Date(date).toLocaleDateString('fr')

type Product = {
  id: number
  name: string
  description?: string
  stock_available: number
  barcode?: string
  updatedAt: string
  createdAt: string
  statu: 'safe' | 'danger' | 'empty'
}

type Event = {
  id: number
  updatedAt: string
  createdAt: string
  value: string
  metadata: any
}

const getColor = (statu?: 'safe' | 'danger' | 'empty') => {
  switch (statu) {
    case 'safe':
      return '#00b200'
    case 'danger':
      return '#ee6002'
    case 'empty':
      return '#ff2410'
    default:
      return 'grey'
  }
}

const ProductCard = (v) => (
  <div className="product-card" style={{ background: getColor(v.value.statu) }}>
    <div className="product-card-name">{v.value.name}</div>
    <div className="product-card-desc">{v.value.description}</div>
    <div className="product-card-stock">
      Stock disponible: <b>{v.value.stock_available}</b>
    </div>
    <div className="product-card-date">
      <div className="product-card-date">
        Créé le {formatDate(v.value.createdAt)}
      </div>
      <div className="product-card-date">
        Modifié le {formatDate(v.value.updatedAt)}
      </div>
    </div>
  </div>
)

const EventLine = (v) => (
  <div
    className="event-line"
    title={v.value.value}
    onClick={() => {
      navigator.clipboard.writeText(v.value.value)
    }}
  >
    {formatDate(v.value.createdAt) + ': '}
    {v.value.value}
  </div>
)

const fetchAllPages = async (
  page = 1,
  pagination = true,
  sort = 'createdAt'
) => {
  const res = await fetch(
    URL + `/api/products?sort=${sort}&pagination[page]=${page}`,
    {
      headers: { Authorization: `Bearer ${TOKEN}` },
    }
  ).then((r) => r.json())
  let result = res.data
  console.log(res);
  if (pagination && res.meta.pagination.page < res.meta.pagination.pageCount) {
    const rest = await fetchAllPages(page + 1, pagination, sort)
    result = [...result, ...rest]
  }
  return result
}

const fetchAllEvents = async (page = 1, pagination = true) => {
  const res = await fetch(
    URL + '/api/events?sort=createdAt:desc&pagination[page]=' + page,
    {
      headers: { Authorization: `Bearer ${TOKEN}` },
    }
  ).then((r) => r.json())
  let result = res.data
  if (pagination && res.meta.pagination.page < res.meta.pagination.pageCount) {
    const rest = await fetchAllEvents(page + 1)
    result = [...result, ...rest]
  }
  return result
}

const App = () => {
  const [values, setValues] = useState<Product[]>(
    []
  )
  const [events, setEvents] = useState<Event[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAllEvents()
        .then((v) => {
          setEvents(v)
        })
        .catch(console.error)

      fetchAllPages()
        .then((v) => {
          setLoading(false)
          setValues(v)
          setError(null)
        })
        .catch((err) => {
          console.error(err)
          setLoading(true)
          setError(err.message + ' ' + URL)
        })
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      {loading ? (
        <div className="load-container">
          <div>{error && <div className="error">{error}</div>}</div>
          <div className="loader"></div>
          <div></div>
        </div>
      ) : (
        <div className="page-container">
          {events.length > 0 && (
            <div className="event-container">
              {events.map((event) => (
                <EventLine key={event.id} value={event} />
              ))}
            </div>
          )}
          <div className="card-container">
            {values.map((value) => (
              <ProductCard value={value} key={value.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
