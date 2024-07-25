import { Provider } from "react-redux";
import store from "../redux/store";

export const ReduxProvider = (props: any) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};