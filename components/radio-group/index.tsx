export type RadioList =  {
    id: string,
    name: string
}

type RDProps = {
    list: Array<RadioList>,
    onClick: (index: number) => void
}

export default function RadioGroup(props: RDProps) {
    function change(index: number) {
        props.onClick(index)
    }
    return (
        <div className="radio-group">
            {props.list.map((r, index) => (
                <label key={index} className="radio p-1 cursor-pointer" id={r.id}>
                    <input type="radio" name="rd" className="m-1" 
                        onChange={e => change(index)}
                        />
                    {r.name}
                </label>
                ))
            }
        </div>
    )
}