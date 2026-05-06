```js
// server/api.js
const express = require('express')
const router   = express.Router()

// ---------- Mock data ----------
let waypoints  = []   // array of {id, name, latitude, longitude}
let measurements = [] // array of {id, startLat, startLng, endLat, endLng, distanceMeters, azimuthDegrees}
let reports    = []   // array of {id, content, timestamp}

// helper to auto‑increment ids
const nextId = list => (list.length ? Math.max(...list.map(o => o.id)) + 1 : 1)

// ---------- Middleware ----------
router.use(express.json()) // parse JSON bodies

// ---------- Waypoint routes ----------
router.get('/waypoints', (req, res) => res.json(waypoints))

router.get('/waypoints/:id', (req, res) => {
  const wp = waypoints.find(w => w.id === Number(req.params.id))
  if (!wp) return res.status(404).json({ error: 'Waypoint not found' })
  res.json(wp)
})

router.post('/waypoints', (req, res) => {
  const { name, latitude, longitude } = req.body
  const wp = {
    id: nextId(waypoints),
    name,
    latitude,
    longitude
  }
  waypoints.push(wp)
  res.status(201).json(wp)
})

router.put('/waypoints/:id', (req, res) => {
  const idx = waypoints.findIndex(w => w.id === Number(req.params.id))
  if (idx === -1) return res.status(404).json({ error: 'Waypoint not found' })
  waypoints[idx] = { ...waypoints[idx], ...req.body }
  res.json(waypoints[idx])
})

router.delete('/waypoints/:id', (req, res) => {
  const idx = waypoints.findIndex(w => w.id === Number(req.params.id))
  if (idx === -1) return res.status(404).json({ error: 'Waypoint not found' })
  const deleted = waypoints.splice(idx, 1)[0]
  res.json(deleted)
})

// ---------- Measurement routes ----------
router.get('/measurements', (req, res) => res.json(measurements))

router.get('/measurements/:id', (req, res) => {
  const m = measurements.find(m => m.id === Number(req.params.id))
  if (!m) return res.status(404).json({ error: 'Measurement not found' })
  res.json(m)
})

router.post('/measurements', (req, res) => {
  const {
    startLat,
    startLng,
    endLat,
    endLng,
    distanceMeters,
    azimuthDegrees
  } = req.body
  const m = {
    id: nextId(measurements),
    startLat,
    startLng,
    endLat,
    endLng,
    distanceMeters,
    azimuthDegrees
  }
  measurements.push(m)
  res.status(201).json(m)
})

router.put('/measurements/:id', (req, res) => {
  const idx = measurements.findIndex(m => m.id === Number(req.params.id))
  if (idx === -1) return res.status(404).json({ error: 'Measurement not found' })
  measurements[idx] = { ...measurements[idx], ...req.body }
  res.json(measurements[idx])
})

router.delete('/measurements/:id', (req, res) => {
  const idx = measurements.findIndex(m => m.id === Number(req.params.id))
  if (idx === -1) return res.status(404).json({ error: 'Measurement not found' })
  const deleted = measurements.splice(idx, 1)[0]
  res.json(deleted)
})

// ---------- Report routes ----------
router.get('/reports', (req, res) => res.json(reports))

router.get('/reports/:id', (req, res) => {
  const r = reports.find(r => r.id === Number(req.params.id))
  if (!r) return res.status(404).json({ error: 'Report not found' })
  res.json(r)
})

router.post('/reports', (req, res) => {
  const { content, timestamp } = req.body
  const r = {
    id: nextId(reports),
    content,
    timestamp: timestamp ? new Date(timestamp) : new Date()
  }
  reports.push(r)
  res.status(201).json