const remoteURL = "http://localhost:5002"

export const getProductById = (productId) => {
  //                            
    return fetch(`${remoteURL}/products/${productId}?`)
    .then(res => res.json())
}

export const getAllProducts = () => {
  return fetch(`${remoteURL}/products`)
  .then(res => res.json())
}