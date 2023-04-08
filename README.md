### Currently working on

- [ ] Store point in the backend
  - [ ] api handler for code submit
  - [ ] 

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

##### Backend
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
  - [x] Dynamic points form
  - [ ] run progress bar
  - [ ] view past races
  - [x] Choose color scheme
  - [ ] Homepage
  - [x] QR code scanner UI
    - [ ] Button to open QR code scanner
  - [x] Implement scanner
  - [x] Navbar
  - [x] Split admin page into components

### Resources

https://www.npmjs.com/package/html5-qrcode
https://www.npmjs.com/package/qrcode

### Ideas

The points json has to have these things

- Coordinates
- name
- order ( solved by storing all points in an array )

for now this could be the structure

points : {
  ** ARRAY **
   coordinates: {
    lat: int
    len: int
  },
  name: str

}




