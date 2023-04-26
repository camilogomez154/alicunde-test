import React from "react"

import { ITextItem, TextListContext, TextListContextType } from "../../context/list";

export type TextItemProps =
    { onDelete: (id: string) => void } &
    ITextItem;

export const TextItem: React.FC<TextItemProps> = ({ value, id, onDelete }) => {

    const onDeleteHandle = () => {
        console.log(id)
        onDelete(id);
    }

    return (
        <article onClick={onDeleteHandle} key={id} className="text-item">
            {value}
        </article>
    );
}

export const TextList = () => {

    const { textList: Items, removeItem } = React.useContext(TextListContext) as TextListContextType;

    const renderItems = (): JSX.Element[] =>
        Items.map((item) => (<TextItem onDelete={removeItem} key={item.id} id={item.id} value={item.value} />))

    if (!Items.length) {
        return (
            <div className="text-list-wrapper text-list-wrapper__not-found">
                No hay items disponibles.
            </div>
        );
    }

    return (
        <div className="text-list-wrapper">
            <h1>Items disponibles.</h1>
            {...renderItems()}
        </div>
    )
}
