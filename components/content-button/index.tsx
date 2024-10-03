
type LineButtonsProps = {
    addClass: string,
    children: React.ReactNode
}

export function LineButtons(props: LineButtonsProps) {
        let classList = "line-button w-full flex justify-center ".concat(props.addClass ?? "");
    return(
    <div className={classList}>
         {props.children}
    </div>
    )
}