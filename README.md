### Main goals

- [ ] Chose tech stack
  - [ ] Backend
  - [ ] Frontend
- [ ] Build the backend

  - [ ] Create guest codes
  - [ ] Database
    - [ ] Store teachers
    - [ ] Store run time
  - [ ] Run timer
  - [ ] Guest login
  - [ ] Teacher login
  - [ ] QR code generation
  - [ ] QR code reading
    - [ ] Close QR code scanner after scan
  - [ ] analytics
    - [ ] Graph
    - [ ] result table

- [ ] Build the front-end
  - [ ] Choose color scheme
  - [ ] Homepage
  - [ ] QR code scanner UI
    - [ ] Button to open QR code scanner
  - [ ] Implement scanner
  - [ ] Navbar

### Resources

https://www.npmjs.com/package/html5-qrcode

### Api

- createRun

  - Creates a new run session, with model Run
  - pass in a object: {
    - creatatorId: string,
    - points: [
    - point : {
    - cords: {
      - width: float,
      - height: float,
      - }
      - order: int,
      - qrCodeId: string,
    - }
    - ]
    - }
  - Returns: {
    null / idk
    - }

- createRunnner

  - Creates a new runner session, with model Runner
  - pass in a object: {
    - name: String,
    - runId: string,

  }

  - creatatorId: string - Returns: {
    null/idk
  - }
