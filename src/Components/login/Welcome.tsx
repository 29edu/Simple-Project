type WelcomeProps = {
    onLogout: () => void;
};

export default function Welcome({ onLogout }: WelcomeProps) {
    return (
        <div>
            <h1>Welcome!</h1>
            <button onClick={onLogout}>
                Logout
            </button>
        </div>
    )
}