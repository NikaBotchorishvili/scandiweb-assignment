import { Component } from 'react'
import { Attributes } from '../../../context/CartContext/types'

interface Props{
    attributes: Attributes[]
}

export default class SizeSelector extends Component<Props> {
  render() {
    const {attributes} = this.props
    return (
        <article className="space-y-2">
        <h2 className="uppercase text-xl font-bold">
            SIZE:
        </h2>

        <ul className="flex gap-5">
            {attributes[0].items.map((item) => (
                <li
                    className="border border-primary py-1.5 px-3"
                    key={item.id}
                >
                    {item.displayValue}
                </li>
            ))}
        </ul>
    </article>
    )
  }
}
