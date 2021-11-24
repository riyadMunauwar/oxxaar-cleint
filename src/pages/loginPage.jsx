import LoginBox from "../components/authentication/loginBox";

function LoginPage() {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <LoginBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
