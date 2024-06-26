import { createGetKcContext } from "keycloakify/login";

export type KcContextExtension =
  | { pageId: "login.ftl" }
  // NOTE: register.ftl is deprecated in favor of register-user-profile.ftl
  // but let's say we use it anyway and have this plugin enabled: https://github.com/micedre/keycloak-mail-whitelisting
  // keycloak-mail-whitelisting define the non standard ftl global authorizedMailDomains, we declare it here.
  | { pageId: "register.ftl"; authorizedMailDomains: string[] }
  | { pageId: "org-select-form.ftl"; organizations: Organization };

//NOTE: In most of the cases you do not need to overload the KcContext, you can
// just call createGetKcContext(...) without type arguments.
// You want to overload the KcContext only if:
// - You have custom plugins that add some values to the context (like https://github.com/micedre/keycloak-mail-whitelisting that adds authorizedMailDomains)
// - You want to add support for extra pages that are not yey featured by default, see: https://docs.keycloakify.dev/contributing#adding-support-for-a-new-page
export const { getKcContext } = createGetKcContext<KcContextExtension>({
  mockData: [
    {
      pageId: "info.ftl",
      messageHeader: "Testing Header",
      message: {
        type: "error",
        summary: "Testing summary",
      },
      requiredActions: ["CONFIGURE_RECOVERY_AUTHN_CODES", "VERIFY_EMAIL"],
    },
    {
      pageId: "login.ftl",
      // locale: {
      //   //When we test the login page we do it in french
      //   currentLanguageTag: "fr",
      // },
      //Uncomment the following line for hiding the Alert message
      //"message": undefined
      //Uncomment the following line for showing an Error message
      //message: { type: "error", summary: "This is an error" }
      social: {
        displayInfo: true,
        providers: [
          {
            loginUrl: "/testing",
            alias: "google",
            providerId: "Google",
            displayName: "Google",
          },
          {
            loginUrl: "/testing",
            alias: "microsoft",
            providerId: "Microsoft",
            displayName: "Microsoft",
          },
        ],
      },
    },
    {
      pageId: "register.ftl",
      realm: {
        registrationEmailAsUsername: true,
      },
      authorizedMailDomains: [
        "example.com",
        "another-example.com",
        "*.yet-another-example.com",
        "*.example.com",
        "hello-world.com",
      ],
      // Simulate we got an error with the email field
      messagesPerField: {
        printIfExists: <T>(fieldName: string, className: T) => {
          console.log({ fieldName });
          return fieldName === "email" ? className : undefined;
        },
        existsError: (fieldName: string) => fieldName === "email",
        get: (fieldName: string) => `Fake error for ${fieldName}`,
        exists: (fieldName: string) => fieldName === "email",
      },
      social: {
        displayInfo: true,
        providers: [
          {
            loginUrl: "/testing",
            alias: "google",
            providerId: "Google",
            displayName: "Google",
          },
          {
            loginUrl: "/testing",
            alias: "microsoft",
            providerId: "Microsoft",
            displayName: "Microsoft",
          },
        ],
      },
    },
    {
      pageId: "login-idp-link-email.ftl",
      message: {
        type: "warning",
        summary:
          "You need to verify your email address to link your account with Google",
      },
    },
    {
      pageId: "login-idp-link-confirm.ftl",
      message: {
        type: "error",
        summary:
          "User with email nikhil@buildbetter.app already exists. How do you want to continue?",
      },
    },
    {
      pageId: "org-select-form.ftl",
      organizations: {
        "0": {
            segment_identifier: "39790f16-5083-4ea9-ad2a-50da583c8e95",
            name: "BB HQ"
        },
        "1": {
          segment_identifier: "39790f16-5083-4ea9-ad2a-50da583c8e92",
          name: "Test Org"
        },
      },
    },
  ],
});

export const { kcContext } = getKcContext({
  // Uncomment to test the login page for development.
  mockPageId: "org-select-form.ftl",
});

export type KcContext = NonNullable<
  ReturnType<typeof getKcContext>["kcContext"]
>;

export type Organization = {
  [key: string]: {
      name: string;
      segment_identifier: string;
  };
};