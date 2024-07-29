export async function getProducts({ endpoint }: { endpoint?: string }) {
  const url = `https://dummyjson.com${endpoint}`;
  const options = {
    method: "GET",
  };
  let loading = false;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (response.status === 200) {
      loading = false;

      return { products: result.products, loading: loading } as {
        products: any;
        loading: boolean;
      };
    } else {
      return { products: [], loading: true };
    }
  } catch (error) {
    return { products: [], loading: true };
  }
}

export async function getSingleProducts({ id }: { id: number }) {
  const url = `https://dummyjson.com/products/${id}`;
  const options = {
    method: "GET",
  };
  let loading = false;

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (response.status === 200) {
      loading = false;

      return { product: result, loading: loading } as {
        product: any;
        loading: boolean;
      };
    } else {
      return { product: {}, loading: true };
    }
  } catch (error) {
    return { product: {}, loading: true };
  }
}

export async function getCategories() {
  const url = "https://dummyjson.com/products/categories";
  const options = {
    method: "GET",
  };
  let loading = false;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (response.status === 200) {
      loading = false;
      return { categories: result, loading: loading };
    } else {
      return { categories: [], loading: loading };
    }
  } catch (error) {
    return { categories: [], loading: loading };
  }
}
