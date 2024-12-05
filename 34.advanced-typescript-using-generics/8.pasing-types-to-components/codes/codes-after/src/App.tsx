import { ReactNode } from "react";

interface ProductListProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

export const ProductList = <T,>(props: ProductListProps<T>) => {
  return <ul>{props.rows.map((row) => props.renderRow(row))}</ul>;
};

interface Product {
  id: number;
  title: string;
  price: number;
}

function App() {
  return (
    <div>
      <ProductList<Product>
        rows={[1, 2, 3, 4]}
        renderRow={(row) => <li>{row.title}</li>}
      />
      <ProductList<Product>
        rows={[
          { id: 1, title: "blabla", price: 99 },
          { id: "2", title: "blabla2", price: "29" },
        ]}
        renderRow={(row) => {
          return <li>{row.nonExistingProp}</li>;
        }}
      ></ProductList>
    </div>
  );
}

export default App;
