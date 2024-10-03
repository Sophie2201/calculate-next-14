type ButtonProps = {
    text: string,
    value: string,
    addClass?: string
}

export default function Button(props: ButtonProps) {
    let classList = "button min-w-16 min-h-16 max-h-16 ".concat(props.addClass ?? "");
    return(
        <button type="button" className={classList}>{props.text}</button>
    )
}