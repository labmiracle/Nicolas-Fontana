function Loading({ show, children }: { show: boolean; children: React.ReactNode }) {
    return show ? <div>Loading...</div> : <div>{children}</div>;
}
export default Loading;
