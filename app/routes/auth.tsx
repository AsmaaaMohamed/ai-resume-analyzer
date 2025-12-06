import { useEffect } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = ()=>([
    {title:'Resumind | Auth'},
    {name: 'description', content: 'Log into your account'},
])

const Auth = () => {
    const {isLoading , auth} = usePuterStore();
    const navigate = useNavigate();
    useEffect(() => {
        if (auth.isAuthenticated) {
            const urlParams = new URLSearchParams(window.location.search);
            const next = urlParams.get('next') || '/';
            navigate(next);
        } else if (!isLoading) {
            // Only redirect to auth if we're not in the process of authenticating
            const isAuthPage = window.location.pathname === '/auth';
            if (!isAuthPage) {
                navigate(`/auth?next=${encodeURIComponent(window.location.pathname)}`);
            }
        }
    }, [auth.isAuthenticated, isLoading, navigate])
    return (
        <main className="bg-[url('images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col item-center gap-2 text-center">
                        <h1>Welcome</h1>
                        <h2 className="text-4xl font-bold">Log In to Continue Your Job Journey</h2>
                    </div>
                    {
                        isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p>Signing you in...</p>
                            </button>
                        ): (
                            <>
                                {auth.isAuthenticated ?(
                                    <button className="auth-button" onClick={auth.signOut}>
                                        <p>Log Out</p>
                                    </button>
                                ) : (
                                    <button className="auth-button" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )
                    }
                </section>
            </div>
        </main>
    );
};

export default Auth;
