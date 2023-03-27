### Currently working on

- [ ] components/qrcode
  - [ ] pass props with qrcode string to encode
  - [ ] make logic to generate the code from the string
- [ ] backend to check the code and update the running progress
- [ ] front-end to update the running progress ( optimistic updates )
- [ ] secure the backend so cheating would be harder
- [ ] qr codes need to be a bit randomised
- [ ] qr code, how long, where to store

### Main goals

- [ ] Solve the problem with data, offline upload
  - [ ] easier idea: get metadata from images taken on camera
  - [ ] harder idea: create mobile app for these special people
  - [ ] best idea: create a space company, launch our own satelits, allow them to connect without playing

- [x] Chose tech stack
  - [x] Backend
  - [x] Frontend
- [ ] Build the backend

  - [ ] be able to generate a pdf with all the qr codes
    - [ ] Qr code storage
    - [ ] store within points, create api to check the code, and move progress
  - [x] Create guest codes
  - [ ] Database
    - [ ] Store teachers
    - [ ] Store run time
  - [ ] Run timer
  - [x] Guest login
  - [x] Admin login
  - [ ] QR code generation
  - [x] QR code reading
  - [ ] analytics
    - [ ] Graph
    - [ ] result table

- [ ] Build the front-end
  - [ ] run progress bar
  - [ ] view past races
  - [x] Choose color scheme
  - [ ] Homepage
  - [x] QR code scanner UI
    - [ ] Button to open QR code scanner
  - [x] Implement scanner
  - [x] Navbar

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
