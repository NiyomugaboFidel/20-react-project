# Product Showcase

Product Showcase is a web application that displays a list of products fetched from a local JSON server. Users can view product details, search for products, and add new products to the list.

## Features

- Fetch and display a list of products
- Search functionality to filter products by title
- View detailed information for each product
- Add new products via a form submission

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [File Structure](#file-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/product-showcase.git

2. Navigate to the project directory:
cd product-showcase

3. Install the necessary dependencies:
 npm install

4. Start the JSON server:
npx json-server --watch db.json

5. Open index.html in your web browser to view the application.

# Usage
## Viewing Products
On the homepage, you will see a list of products.
Click on a product title or image to view detailed information about the product.
## Searching for Products
Use the search bar at the top of the page to filter products by title.
## Adding a New Product
Click the "Add Product" button to open the product submission form.
Fill out the form with the product details.
Click "Submit" to add the new product to the list.

# API Endpoints

GET /products - Fetch all products
GET /products/:id - Fetch a single product by ID
POST /products - Add a new product

## Product Details

## Add Product Form

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.


## License
This project is licensed under the MIT License. See the LICENSE file for details.
