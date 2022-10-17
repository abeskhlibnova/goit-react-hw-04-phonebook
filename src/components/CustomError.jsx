export default function CustomError(props) {
    const { children } = props;
    return (
        <div style={{ fontSize: 32 }}>This is a custom error - {children}</div>
    );
}
