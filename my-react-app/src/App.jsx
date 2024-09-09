import { UmdComponent } from "./UmdComponent";

const App = () => {
  return (
    <div>
      <div>动态组件示例：</div>
      <UmdComponent
        url="https://unpkg.com/react-draggable@4.4.4/build/web/react-draggable.min.js"
        umdProps={{
          onDrag(e) {
            console.log(e);
          },
        }}
      >
        <div
          style={{ width: 100, height: 100, backgroundColor: "skyblue" }}
        ></div>
      </UmdComponent>
    </div>
  );
};

export default App;
