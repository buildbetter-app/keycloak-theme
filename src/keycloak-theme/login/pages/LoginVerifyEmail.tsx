import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";

export default function LoginVerifyEmail(props: PageProps<Extract<KcContext, { pageId: "login-verify-email.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { msg } = i18n;

    const { url, user } = kcContext;

    return (
        <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} displayMessage={false} headerNode={
            <div>                    
                <div className="flex justify-center pb-8">
                    <svg width="53" height="48" viewBox="0 0 53 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.3146 24.7922L52.3393 24.8463L52.3786 24.8909C52.5168 25.0474 52.6 25.2521 52.6 25.4765C52.6 25.4936 52.5996 25.5071 52.5989 25.5191L52.5974 25.5438L52.5989 25.5685C52.5996 25.5795 52.6 25.5932 52.6 25.6101V37.5222C52.6 42.6964 48.3899 46.907 43.2152 46.907H9.78478C4.61059 46.907 0.4 42.6969 0.4 37.5222V25.6101C0.4 25.5932 0.400365 25.5795 0.401057 25.5685L0.402617 25.5435L0.401057 25.5186C0.400368 25.5075 0.4 25.4939 0.4 25.4765C0.4 25.2243 0.504897 24.9971 0.674514 24.8354L0.720565 24.7915L0.750723 24.7354L7.01674 13.0954L7.01676 13.0953C8.16088 10.9694 10.3712 9.64939 12.7855 9.64939H15.0903C15.5792 9.64939 15.9759 10.0461 15.9759 10.535C15.9759 11.0239 15.5792 11.4206 15.0903 11.4206H12.7855C11.0246 11.4206 9.41139 12.3842 8.5763 13.9352L8.57628 13.9353L3.15733 24.0019L2.83995 24.5915H3.50954H14.5523C14.8975 24.5915 15.2112 24.7922 15.3562 25.1061C15.3562 25.1061 15.3562 25.1061 15.3562 25.1061L17.5723 29.908C18.3511 31.5954 20.054 32.6852 21.9129 32.6852H30.8492C32.7077 32.6852 34.4109 31.5955 35.1897 29.908L37.4059 25.1061L37.406 25.1058C37.5504 24.7924 37.8643 24.5915 38.2098 24.5915H49.6543H50.2764L50.0182 24.0255L45.5441 14.2173L45.1802 14.3833L45.5441 14.2173C44.7688 12.5179 43.0625 11.4205 41.1946 11.4205H37.9096C37.4206 11.4205 37.024 11.0238 37.024 10.5349C37.024 10.0459 37.4207 9.64927 37.9096 9.64927H41.1946C43.7531 9.64927 46.0937 11.1542 47.1554 13.4822L47.1554 13.4822L52.3146 24.7922Z" fill="url(#paint0_linear_486_233394)" stroke="url(#paint1_linear_486_233394)" stroke-width="0.8"/>
                        <path d="M26.1885 0.000352411C25.4787 0.000352411 24.9029 0.576086 24.9029 1.28595V17.588L20.1377 13.7378C19.5854 13.2916 18.776 13.3774 18.3297 13.9297C17.8834 14.4821 17.9693 15.2915 18.5216 15.7378L25.5723 21.4341C25.8078 21.6246 26.0943 21.7197 26.3803 21.7197C26.6664 21.7197 26.9524 21.6246 27.1884 21.4341L34.2391 15.7378C34.7914 15.2915 34.8772 14.482 34.431 13.9297C33.9852 13.3774 33.1752 13.2916 32.6229 13.7378L27.4739 17.898V1.2856C27.4739 0.575791 26.8986 0 26.1883 0L26.1885 0.000352411Z" fill="#2DC0FF"/>
                        <defs>
                            <linearGradient id="paint0_linear_486_233394" x1="26.5" y1="9.24927" x2="26.5" y2="47.307" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.1"/>
                                <stop offset="1" stop-color="white" stop-opacity="0.2"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_486_233394" x1="27" y1="13" x2="27" y2="52" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0"/>
                                <stop offset="1" stop-color="white" stop-opacity="0.16"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <h1>Verification Sent</h1>
                <p className="text-center">{msg("emailVerifyInstruction1", user?.email ?? "")}</p>
            </div>
        }>
            <p className="instruction">
                {msg("emailVerifyInstruction2")}
                <br />
                <a href={url.loginAction}>{msg("doClickHere")}</a>
                &nbsp;
                {msg("emailVerifyInstruction3")}
            </p>
        </Template>
    );
}
