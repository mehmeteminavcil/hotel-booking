type ToastMessage = {
    message:string;
    type:"SUCCES" | "ERROR";
}

type AppContext = {
    showToast: (toastMessage:ToastMessage)=> void
}


const AppContext = React.createContext<AppContext | undefined >(undefined)