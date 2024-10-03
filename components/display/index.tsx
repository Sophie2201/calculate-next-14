type DisplayProps = {
    addClass: string
}

export default function Display(props: DisplayProps) {
    const classList = "w-full h-24 text-right font-mono px-1 text-white text-lg ".concat(props.addClass);
    return (
        <div><input type="text" className={classList} /></div>
    )
}