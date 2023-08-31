// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { assert } from "keycloakify/tools/assert";
import { clsx } from "keycloakify/tools/clsx";
import { usePrepareTemplate } from "keycloakify/lib/usePrepareTemplate";
import { type TemplateProps } from "keycloakify/login/TemplateProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { KcContext } from "./kcContext";
import type { I18n } from "./i18n";

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayInfo = false,
        displayMessage = true,
        displayRequiredFields = false,
        displayWide = false,
        showAnotherWayIfPresent = true,
        headerNode,
        showUsernameNode = null,
        infoNode = null,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children
    } = props;

    const { getClassName } = useGetClassName({ doUseDefaultCss, classes });

    const { msg, changeLocale, labelBySupportedLanguageTag, currentLanguageTag } = i18n;

    const { realm, locale, auth, url, message, isAppInitiatedAction } = kcContext;

    const { isReady } = usePrepareTemplate({
        "doFetchDefaultThemeResources": doUseDefaultCss,
        url,
        "stylesCommon": [
            "node_modules/patternfly/dist/css/patternfly.min.css",
            "node_modules/patternfly/dist/css/patternfly-additions.min.css",
            "lib/zocial/zocial.css"
        ],
        "htmlClassName": getClassName("kcHtmlClass"),
        "bodyClassName": undefined
    });

    if (!isReady) {
        return null;
    }

    return (
        <div className={getClassName("kcLoginClass")}>
            <div className={clsx(getClassName("kcFormCardClass"), displayWide && getClassName("kcFormCardAccountClass"))}>
                <header className={getClassName("kcFormHeaderClass")}>
                    
                        {!(auth !== undefined && auth.showUsername && !auth.showResetCredentials) ? (
                                displayRequiredFields ? (
                                    <div className={getClassName("kcContentWrapperClass")}>
                                        <div className={clsx(getClassName("kcLabelWrapperClass"), "subtitle")}>
                                            <span className="subtitle">
                                                <span className="required">*</span>
                                                {msg("requiredFields")}
                                            </span>
                                        </div>
                                        <div className="col-md-10">
                                            {headerNode}
                                        </div>
                                    </div>
                                ) : (
                                    <>{headerNode}</>
                                )
                            ) : displayRequiredFields ? (
                                <div className={getClassName("kcContentWrapperClass")}>
                                    <div className={clsx(getClassName("kcLabelWrapperClass"), "subtitle")}>
                                        <span className="subtitle">
                                            <span className="required">*</span> {msg("requiredFields")}
                                        </span>
                                    </div>
                                    <div className="col-md-10">
                                        {showUsernameNode}
                                        <div className={getClassName("kcFormGroupClass")}>
                                            <div id="kc-username">
                                                <label id="kc-attempted-username">{auth?.attemptedUsername}</label>
                                                <a id="reset-login" href={url.loginRestartFlowUrl}>
                                                    <div className="kc-login-tooltip">
                                                        <i className={getClassName("kcResetFlowIcon")}></i>
                                                        <span className="kc-tooltip-text">{msg("restartLoginTooltip")}</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {showUsernameNode}
                                    <div className={getClassName("kcFormGroupClass")}>
                                        <div id="kc-username">
                                            <label id="kc-attempted-username">{auth?.attemptedUsername}</label>
                                            <a id="reset-login" href={url.loginRestartFlowUrl}>
                                                <div className="kc-login-tooltip">
                                                    <i className={getClassName("kcResetFlowIcon")}></i>
                                                    <span className="kc-tooltip-text">{msg("restartLoginTooltip")}</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )}
                            {realm.internationalizationEnabled && (assert(locale !== undefined), true) && locale.supported.length > 1 && (
                                <div id="kc-locale">
                                    <div id="kc-locale-wrapper" className={getClassName("kcLocaleWrapperClass")}>
                                        <div className="kc-dropdown" id="kc-locale-dropdown">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a href="#" id="kc-current-locale-link">
                                                {labelBySupportedLanguageTag[currentLanguageTag]}
                                            </a>
                                            <ul>
                                                {locale.supported.map(({ languageTag }) => (
                                                    <li key={languageTag} className="kc-dropdown-item">
                                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                        <a href="#" onClick={() => changeLocale(languageTag)}>
                                                            {labelBySupportedLanguageTag[languageTag]}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                </header>
                <div id="kc-content">
                    <div id="kc-content-wrapper">
                        {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
                        {displayMessage && message !== undefined && (message.type !== "warning" || !isAppInitiatedAction) && (
                            <div className={clsx("alert", `alert-${message.type}`)}>
                                {message.type === "success" && <span className={getClassName("kcFeedbackSuccessIcon")}></span>}
                                {message.type === "warning" && <span className={getClassName("kcFeedbackWarningIcon")}></span>}
                                {message.type === "error" && <span className={getClassName("kcFeedbackErrorIcon")}></span>}
                                {message.type === "info" && <span className={getClassName("kcFeedbackInfoIcon")}></span>}
                                <span
                                    className="kc-feedback-text"
                                    dangerouslySetInnerHTML={{
                                        "__html": message.summary
                                    }}
                                />
                            </div>
                        )}
                        {children}
                        {auth !== undefined && auth.showTryAnotherWayLink && showAnotherWayIfPresent && (
                            <form
                                id="kc-select-try-another-way-form"
                                action={url.loginAction}
                                method="post"
                                className={clsx(displayWide && getClassName("kcContentWrapperClass"))}
                            >
                                <div
                                    className={clsx(
                                        displayWide && [getClassName("kcFormSocialAccountContentClass"), getClassName("kcFormSocialAccountClass")]
                                    )}
                                >
                                    <div className={getClassName("kcFormGroupClass")}>
                                        <input type="hidden" name="tryAnotherWay" value="on" />
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            href="#"
                                            id="try-another-way"
                                            onClick={() => {
                                                document.forms["kc-select-try-another-way-form" as never].submit();
                                                return false;
                                            }}
                                        >
                                            {msg("doTryAnotherWay")}
                                        </a>
                                    </div>
                                </div>
                            </form>
                        )}
                        {displayInfo && (
                            <div id="kc-info" className={getClassName("kcSignUpClass")}>
                                <div id="kc-info-wrapper" className={getClassName("kcInfoAreaWrapperClass")}>
                                    {infoNode}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="text-[10px] text-white text-opacity-50 fixed bottom-6 w-full text-center">
                <svg viewBox="0 0 24 24" focusable="false" className="text-yellow-200 font-medium h-6 mr-2"><path fillRule="evenodd" clipRule="evenodd" d="M11.5699 4.18182C11.6808 4.06771 11.8325 4.00235 11.9916 4.00008L11.9916 4.00007C12.1537 3.99766 12.3098 4.061 12.4245 4.17565C12.5391 4.29029 12.6025 4.44645 12.6002 4.60864V10.5513L16.8023 6.34922C16.911 6.23752 17.059 6.17257 17.2148 6.16801L17.2148 6.16801C17.3768 6.16332 17.5338 6.22439 17.65 6.33729C17.7664 6.45019 17.832 6.60528 17.8322 6.76734C17.8323 6.9294 17.7668 7.08462 17.6507 7.19766L13.4483 11.4H19.3912C19.5518 11.3977 19.7066 11.4599 19.8209 11.5727C19.9353 11.6854 19.9997 11.8393 19.9997 12C19.9997 12.1606 19.9353 12.3145 19.8209 12.4273C19.7066 12.54 19.5518 12.6023 19.3912 12.6H13.4483L17.6507 16.8024C17.767 16.9141 17.8335 17.0679 17.8351 17.2292C17.8368 17.3905 17.7735 17.5455 17.6594 17.6595C17.5454 17.7736 17.3903 17.837 17.229 17.8354C17.0678 17.8336 16.9139 17.7672 16.8022 17.6508L12.6002 13.4488V19.3913C12.6025 19.5518 12.5402 19.7067 12.4274 19.821C12.3147 19.9354 12.1608 19.9998 12.0002 19.9998C11.8396 19.9998 11.6856 19.9354 11.5728 19.821C11.4601 19.7067 11.3979 19.5518 11.4002 19.3913V13.4482L7.19768 17.6507C7.08599 17.7671 6.93224 17.8335 6.771 17.8352C6.60974 17.8368 6.45464 17.7735 6.34054 17.6594C6.22657 17.5454 6.16322 17.3903 6.16482 17.2291C6.16657 17.0678 6.233 16.9139 6.34924 16.8022L10.5514 12.6H4.60856C4.44799 12.6023 4.29317 12.54 4.17879 12.4273C4.06442 12.3145 4 12.1606 4 12C4 11.8393 4.06442 11.6854 4.17879 11.5727C4.29316 11.4599 4.44798 11.3977 4.60856 11.4H10.5514L6.34914 7.19778C6.23436 7.08621 6.16887 6.93339 6.16727 6.77322C6.16566 6.61318 6.2282 6.45903 6.34084 6.34519C6.45362 6.23149 6.6071 6.16747 6.76715 6.16733L6.76712 6.16733C6.92932 6.16733 7.08468 6.23309 7.19758 6.34934L11.4002 10.5519V4.60864C11.3979 4.44954 11.459 4.29592 11.5699 4.18182Z" fill="currentColor"></path></svg>
                By using BuildBetter, you agree to our&nbsp;
                <a href="https://sites.buildbetter.ai/terms" className="text-accent-900 hover:no-underline hover:!text-accent-800" target="_blank" rel="noreferrer">Terms of Service</a> 
                &nbsp;and&nbsp;
                <a href="https://sites.buildbetter.ai/privacy" className="text-accent-900 hover:no-underline  hover:!text-accent-800" target="_blank" rel="noreferrer">Privacy Policy</a> 
            </div>
        </div>
    );
}
