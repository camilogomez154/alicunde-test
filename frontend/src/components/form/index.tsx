import React from "react";
import { TextListContext, TextListContextType, ITextItem } from "../../context/list";

export const FormControl = () => {

    const [formData, setFormData] = React.useState<Omit<ITextItem, 'id'>>({ value: "" });
    const { addItem } = React.useContext(TextListContext) as TextListContextType;

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const handleSaveText = (e: React.FormEvent, formData: Omit<ITextItem, 'id'>) => {
        e.preventDefault();

        if (!formData.value.length) throw new Error("Texto no valido");

        addItem(formData.value);
        setFormData({ value: "" });
    };

    return (
        <div className="form-wrapper">
            <form className="form" onSubmit={(e) => handleSaveText(e, formData)}>
                <div className="form-control">
                    <label htmlFor="value">Text to list</label>
                    <input value={formData.value} onChange={handleForm} type="value" id="value" />
                </div>
                <button disabled={formData === undefined ? true : false}>Add Text</button>
            </form>
        </div>
    );
}
