# Bloomstore - Filter Eshop

A **simple and modern e-commerce web application** built with [`Next.js`](https://nextjs.org/) and [`Tailwind CSS`](https://tailwindcss.com/).

This project features a **custom product filtering system**, allowing users to refine results by:
- Category  
- Price  
- Color  

The store uses efficient **API calls** to dynamically fetch and display products, ensuring fast performance and real-time updates.

![Bloomstore](https://github.com/user-attachments/assets/a66041d8-77c0-410a-a0dc-4df18f432ccd)

---

## Design

The design is inspired by my own creative direction ([tomaszelenak.com](https://www.tomaszelenak.com) [Self-Award😂]) along with elements drawn from top-tier e-commerce inspirations found on [Awwwards](https://www.awwwards.com/).  
It focuses on clarity, minimalism, and intuitive user experience.

![bloomstore2](https://github.com/user-attachments/assets/05456632-c227-4ca5-8b00-0d62eff0317d)

---

## API Calls

This application utilizes **Next.js** for handling API requests, which are routed through the `/api` endpoint. For instance, a request to the following URL: ```http://localhost:3000/api/products``` will return the full dataset of available products.

To facilitate product filtering, the API supports query parameters that allow for dynamic data retrieval based on various attributes. For example, a request like: ```http://localhost:3000/api/products?category=jackets&color=blue``` will return a filtered set of products based on the specified **category** (jackets) and **color** (blue). The response will consist of product data that matches these criteria, as demonstrated in the image below.

Additionally, several new parameters have been integrated into the API to enhance the user experience and provide more meaningful insights:
- **most_clicked_product**: Returns the product with the highest number of clicks.
- **most_viewed_product**: Returns the product with the highest number of views.
- **average_price**: Returns the average price of all products within a specific category or filter.

These new parameters allow for more targeted and useful product discovery, enabling users to quickly access popular or trending items, as well as view statistical insights on pricing trends.


![bloomstore_api](https://github.com/user-attachments/assets/94eb438e-a1de-48c0-bc05-ab2bfeeca046)

---

## Installation

You can freely use my project with command ```git clone https://github.com/Tom4sko/Online-Store```. 

Do not forget to install node modules via ```npm i``` and start dev production with ```npm run dev```.

