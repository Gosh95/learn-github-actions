import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

//커밋 메시지 뒤에 [skip ci], [ci skip] 등을 추가하면 워크 플로우 실행을 스킵한다.

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
