function Link({ children, openInNewTab, href }: { children: string; openInNewTab: boolean; href: string }) {
    return (
        <a href={href} target={openInNewTab ? "_blank" : "_self"}>
            {children}
        </a>
    );
}
export default Link;
