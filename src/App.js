import "./App.css";
import SignIn from "./components/SignIn";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "./firebase.js";
import Line from "./components/Line.js";



export default function App() {

    // 戻り値が配列で、その中に必要な情報が含まれているから
    // 複数ある場合は{user, loading, error}のように中括弧で書くことができる
    const [user] = useAuthState(auth);
    return (<div>
        {/* ログインしていればLineコンポーネント実行、ログインしていなければSignInコンポーネントを実行する */}
        {user ? <Line /> : <SignIn/>}
     
    </div>)
}
