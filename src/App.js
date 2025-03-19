import WidgetChabot from './widget/main.tsx';
import {Provider} from 'react-redux';
import {store} from './redux/store.tsx';

function App() {
  return (
    <Provider store={store}>
      <WidgetChabot/>
    </Provider>
  );
}

export default App;
