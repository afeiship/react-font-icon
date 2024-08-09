import ReactFontIcon from '@jswork/react-font-icon/src/main';
import '@jswork/react-font-icon/src/style.scss';

function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <div className="text-center space-x-2">
        <ReactFontIcon prefix="ai7icon-" name="a-custompersonbubble" size={20} />
        <ReactFontIcon prefix="ai7icon-" name="a-custompersonbubble" size={24} />
        <ReactFontIcon prefix="ai7icon-" name="a-custompersonbubble" size={28} />
        <ReactFontIcon prefix="ai7icon-" name="a-custompersonbubble" size={50} />
      </div>
    </div>
  );
}

export default App;
