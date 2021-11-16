### 1.Getting start

```
# install
yarn

# start project
yarn start
```

### 2.Features

(1) Data visualization by using victory

victory doc: http://formidable.com/open-source/victory

![stock table](https://images.gitee.com/uploads/images/2021/1116/231440_d0e1d601_9567819.png "屏幕截图.png")
![stock chart](https://images.gitee.com/uploads/images/2021/1116/232128_efbef152_9567819.png "屏幕截图.png")

(2) Using useCallback() Hooks

more learn: https://reactjs.org/docs/hooks-reference.html#usecallback

```
  const [selectedStock, setSelectedStock] = useState(null);
  # Send data from child to parent component by using useCallback
  const callback = useCallback(
    (selectedStock) => {
      setSelectedStock(selectedStock);
    }, [],
  );
```

(3) Simple Modal

```
  # Control Modal open and close
  {selectedStock && (
    <StockChart
      stock={selectedStock}
      // Pass in the closed function
      onClose={() => setSelectedStock(a)}
    />
  )}
```

(4) code splitting and lazy loading

more learn: https://reactjs.org/docs/code-splitting.html

```
const StockTable = React.lazy(():any => import('./components/StockTable'));
const StockChart = React.lazy(():any => import('./components/StockChart'));

<Suspense fallback={<div/>}>
   ...
</Suspense>
```

![image](https://user-images.githubusercontent.com/70309026/142015611-4ed507a0-0131-4026-b1e3-c1c6a9dd7835.png)

3.Demo

https://deploy-preview-8--react-lazy.netlify.app/
