import { v4 as uuid } from 'uuid';
import * as React from 'react';

export interface ITextItem {
    id: string
    value: string
}

export type TextListContextType = {
    textList: ITextItem[]
    addItem(value: string): void
    removeItem(id: string): void
}

export const TextListContext = React.createContext<TextListContextType | null>(null);

export const TextListProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [textList, setTextList] = React.useState<ITextItem[]>([]);

    const addItem = (value: string) => {
        const id = uuid();
        setTextList(
            state => ([...state, { id, value }])
        );
    };

    const removeItem = (id: string) => {
        const itemIndex = textList.findIndex(item => item.id === id);
        if (itemIndex < 0) throw new Error("item inexistente.");

        const clone = [...textList];
        clone.splice(itemIndex, 1);

        setTextList(clone);
    }

    return (
        <TextListContext.Provider value={{ textList, addItem, removeItem }}>
            {children}
        </TextListContext.Provider>
    );
}