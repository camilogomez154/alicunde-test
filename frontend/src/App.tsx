import { FormControl } from "./components/form"
import { TextList } from "./components/list"
import { TextListProvider } from "./context/list"

export const App = () => {
    return (
        <TextListProvider>
            <div className="application-wrapper">
                <FormControl />
                <TextList />
            </div>
        </TextListProvider>
    )
}
