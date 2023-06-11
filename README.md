# Api Documentation

- base url : `https://test---getretore-api-ukc47aryda-et.a.run.app/`

### Hello

- Path : `/hello`
- Method : `GET`
- Required:

  - Header:

    | Header | Value |
    | ------ | -----------| 
    | authorization | `Bearer <token>` | 
    
- Response :
    ```json
      {
        "error": "unauthenticated please provide the token in header"
      }
    ```

### Place

- Path : `/places`
- Method : `GET`
- Optional:

  - Query Params:

    | Query | Value | description |
    | ------ | ------ | ---------- |
    | limit | int | limit rlist return |
    | search | string | return list that name containing given param |
- Response :

   ```json
       [
          {
              "Place_Id": 0,
              "Place_Name": "Place_Name",
              "Description": "Description",
              "Category": "Category",
              "City": "City",
              "Price": 0,
              "Rating": 0,
              "Time_Minutes": 0,
              "Coordinate": "Coordinate",
              "Lat": 0,
              "Long": 0,
              "Image": "https://storage.googleapis.com/tourism-image-bucket/picture.png"
          },
          {
              "Place_Id": 0,
              "Place_Name": "Place_Name",
              "Description": "Description",
              "Category": "Category",
              "City": "City",
              "Price": 0,
              "Rating": 0,
              "Time_Minutes": 0,
              "Coordinate": "Coordinate",
              "Lat": 0,
              "Long": 0,
              "Image": "https://storage.googleapis.com/tourism-image-bucket/picture.png"
          }
        ]
   ```

### Place Detail

- Path : `/places/{id}`
- Method : `GET`
- Response :

   ```json
      [
       {
            "Place_Id": 0,
            "Place_Name": "Place_Name",
            "Description": "Description",
            "Category": "Category",
            "City": "City",
            "Price": 0,
            "Rating": 0,
            "Time_Minutes": 0,
            "Coordinate": "Coordinate",
            "Lat": 0,
            "Long": 0,
            "Image": "https://storage.googleapis.com/tourism-image-bucket/picture.png"
        }
      ]
   ```

### Recommendation

- Path : `/recommendation`
- Method : `POST`
- Optional:
  - Optional Body:

    | body  | description |
    | ------ | ---------------- |
    | city | Bandung,Jakarta,Yogyakarta,Semarang, or Surabaya |
    | category | Budaya,Taman Hiburan,Tempat Ibadah,Cagar Alam,Bahari or Pusat Perbelanjaan |
- Request Body:
    ```json
      {
          "budget": 100000,
          "category": "Budaya",
          "city": "Yogyakarta",
          "lat": -7.7829,
          "lon": 110.3671
      }
    ```

- Response :

    ```json
    [
        {
            "Place_Id": 115,
            "Place_Name": "Monumen Sanapati",
            "City": "Yogyakarta",
            "Category": "Budaya",
            "Price": 15000,
            "Distance": 0.76,
            "Image": "https://storage.googleapis.com/getretore_assets/images/115_Monumen_Sanapati.JPEG"
        },
        {
            "Place_Id": 147,
            "Place_Name": "Bentara Budaya Yogyakarta (BBY)",
            "City": "Yogyakarta",
            "Category": "Budaya",
            "Price": 0,
            "Distance": 0.89,
            "Image": "https://storage.googleapis.com/getretore_assets/images/147_Bentara_Budaya_Yogyakarta_(BBY).JPEG?ITOK=WFFCHPM1"
        },

      ]
    
    ```

### Package

- Path : `/package`
- Method : `GET`
- Optional:

  - Query Params:

    | Query | Value | description |
    | ------ | ------ | ---------- |
    | city | string | return list that city equal to param |
    
- Response :

   ```json
       [
          {
              "Package": 81,
              "City": "Surabaya",
              "Place_Tourism1": "Taman Prestasi",
              "Place_Tourism2": "Taman Keputran",
              "Place_Tourism3": "Taman Bungkul",
              "Place_Tourism4": "Taman Flora Bratang Surabaya",
              "Place_Tourism5": ""
          },
          {
              "Package": 82,
              "City": "Surabaya",
              "Place_Tourism1": "Museum Sepuluh Nopember Kota Surabaya",
              "Place_Tourism2": "Museum Kesehatan Dr. Adhyatma",
              "Place_Tourism3": "Patung Buddha Empat Rupa",
              "Place_Tourism4": "Museum TNI AL Loka Jala Crana",
              "Place_Tourism5": "Keraton Surabaya"
          },
          {
              "Package": 83,
              "City": "Surabaya",
              "Place_Tourism1": "Masjid Muhammad Cheng Hoo",
              "Place_Tourism2": "Masjid Nasional Al-Akbar",
              "Place_Tourism3": "Klenteng Sanggar Agung",
              "Place_Tourism4": "Patung Buddha Empat Rupa",
              "Place_Tourism5": "Gereja Perawan Maria Tak Berdosa Surabaya"
          },
          {
              "Package": 84,
              "City": "Surabaya",
              "Place_Tourism1": "Ciputra Waterpark",
              "Place_Tourism2": "Kenjeran Park",
              "Place_Tourism3": "Kebun Binatang Surabaya",
              "Place_Tourism4": "Atlantis Land Surabaya",
              "Place_Tourism5": ""
          },
          {
              "Package": 85,
              "City": "Surabaya",
              "Place_Tourism1": "Air Mancur Menari",
              "Place_Tourism2": "Monumen Kapal Selam",
              "Place_Tourism3": "Pantai Ria Kenjeran",
              "Place_Tourism4": "",
              "Place_Tourism5": ""
          },
      ]
   ```
   
### Package By ID

- Path : `/package/{id}`
- Method : `GET`
- Response :

   ```json
       [
          {
              "Package": 81,
              "City": "Surabaya",
              "Place_Tourism1": "Taman Prestasi",
              "Place_Tourism2": "Taman Keputran",
              "Place_Tourism3": "Taman Bungkul",
              "Place_Tourism4": "Taman Flora Bratang Surabaya",
              "Place_Tourism5": ""
          },
          
      ]
   ```

