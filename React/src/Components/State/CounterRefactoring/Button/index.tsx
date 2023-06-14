function Button({ children, clickAction }: { children: string; clickAction: () => void }) {
    return <button onClick={clickAction}>{children}</button>;
}
export default Button;
