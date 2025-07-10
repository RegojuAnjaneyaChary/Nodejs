const http = require('http');
const url = require('url');

let products = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 200 },
];

// Helper to send JSON response
const sendJSON = (res, data, status = 200) => {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const path = parsedUrl.pathname;

  // GET /products → Read All Products
  if (method === 'GET' && path === '/products') {
    sendJSON(res, products);
  }

  // POST /products → Create Product
  else if (method === 'POST' && path === '/products') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { name, price } = JSON.parse(body);
      const newProduct = {
        id: products.length + 1,
        name,
        price,
      };
      products.push(newProduct);
      sendJSON(res, newProduct, 201);
    });
  }

  // PUT /products/:id → Update Product
  else if (method === 'PUT' && path.startsWith('/products/')) {
    const id = parseInt(path.split('/')[2]);
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { name, price } = JSON.parse(body);
      const index = products.findIndex(p => p.id === id);

      if (index !== -1) {
        products[index] = { id, name, price };
        sendJSON(res, products[index]);
      } else {
        sendJSON(res, { message: 'Product not found' }, 404);
      }
    });
  }

  // DELETE /products/:id → Delete Product
  else if (method === 'DELETE' && path.startsWith('/products/')) {
    const id = parseInt(path.split('/')[2]);
    const index = products.findIndex(p => p.id === id);

    if (index !== -1) {
      const deletedProduct = products.splice(index, 1);
      sendJSON(res, deletedProduct[0]);
    } else {
      sendJSON(res, { message: 'Product not found' }, 404);
    }
  }

  // Not Found
  else {
    sendJSON(res, { message: 'Route not found' }, 404);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
