import linkJSON from "../data/links.json" assert { type: "json" };

export function Links() {
    return <p>
        GitHub: {linkJSON["GitHub"]}
        Twitter: {linkJSON["Twitter"]}
    </p>;
}