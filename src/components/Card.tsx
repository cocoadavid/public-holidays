import type {ReactNode} from "react";

type CardProps = {
    children: ReactNode;
}

const Card = ({children}: CardProps) => {
    return ( 
        <section className="rounded-xl bg-white shadow-md p-5">
            {children}
        </section>
     );
}
 
export default Card;