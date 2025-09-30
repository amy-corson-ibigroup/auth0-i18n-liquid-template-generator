import { localizeMessage } from "../scripts";

const html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang={{user.user_metadata.lang | en }}>
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <style>
      @media (min-width: 640px) {
        .sm_table-cell {
          display: table-cell !important;
        }

        .sm_w-1_5 {
          width: 20% !important;
        }

        .sm_w-3_5 {
          width: 60% !important;
        }
      }
    </style>
  </head>
  <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
    ${localizeMessage("verifyYourAccount")}
  </div>

  <body
    style="margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;height:100vh;background-color:rgb(245,245,245);padding-left:1rem;padding-right:1rem;padding-bottom:2.5rem;padding-top:1rem;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale"
  >
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="margin-left:auto;margin-right:auto;border-radius:1rem;background-color:rgb(255,255,255);padding:2rem;border-width:1px;border-style:solid;border-color:rgb(229,229,229);max-width:37.5em"
    >
      <tbody>
        <tr style="width:100%">
          <td>
            <table
              align="center"
              width="100%"
              id="header"
              class=""
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
            >
              <tbody>
                <tr>
                  <td>
                    <a
                      href="{{ home_url | escape }}"
                      style="margin-bottom:1rem;display:block;color:#067df7;text-decoration:none"
                      target="_blank"
                      ><img
                        alt="Auth0 Logo"
                        height="32"
                        src="{{ logo_url | escape }}"
                        style="margin-left:auto;margin-right:auto;display:block;outline:none;border:none;text-decoration:none"
                        width="auto"
                    /></a>
                    <hr
                      style="margin-top:1.25rem;margin-bottom:1.25rem;border-width:1px;border-color:rgb(212,212,212);width:100%;border:none;border-top:1px solid #eaeaea"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              id="subject"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="height:4rem;width:4rem;border-radius:0.75rem;background-color:rgb(245,245,245);max-width:37.5em"
                    >
                      <tbody>
                        <tr style="width:100%">
                          <td>
                            <img
                              alt="Icon"
                              height="24"
                              src="https://cdn.auth0.com/website/emails/product/icon-mail.png"
                              style="margin-left:auto;margin-right:auto;display:block;outline:none;border:none;text-decoration:none"
                              width="24"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h1
                      style="padding:0px;text-align:center;font-size:1.5rem;line-height:2rem;font-weight:600;color:rgb(23,23,23)"
                    >
                      ${localizeMessage("verifyYourAccount")}
                    </h1>
                    <hr
                      style="margin-top:0.75rem;margin-bottom:1.5rem;border-width:1px;border-color:rgb(212,212,212);width:100%;border:none;border-top:1px solid #eaeaea"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              id="body"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
            >
              <tbody>
                <tr>
                  <td>
                    <p
                      style="margin-top:1.5rem;margin-bottom:1.5rem;text-align:center;font-size:1rem;line-height:1.5rem;color:rgb(23,23,23);margin:16px 0"
                    >
                      ${localizeMessage("yourAccountInformation")}
                    </p>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="margin-bottom:1rem;border-radius:0.75rem;border-width:1px;border-style:dashed;border-color:rgb(229,229,229);background-color:rgb(250,250,250);padding-left:1.5rem;padding-right:1.5rem;padding-top:1rem;padding-bottom:1rem;max-width:37.5em"
                    >
                      <tbody>
                        <tr style="width:100%">
                          <td>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="max-width:37.5em"
                            >
                              <tbody>
                                <tr style="width:100%">
                                  <td>
                                    <table
                                      align="center"
                                      width="100%"
                                      id="Account:"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="height:2rem"
                                    >
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td
                                            class="sm_w-1_5 sm_table-cell"
                                            data-id="__react-email-column"
                                            style="display:block;width:100%;text-align:left"
                                          >
                                            <p style="margin:0px;font-weight:600;font-size:14px;line-height:24px">
                                              ${localizeMessage("account")}:
                                            </p>
                                          </td>
                                          <td
                                            class="sm_w-3_5 sm_table-cell"
                                            data-id="__react-email-column"
                                            style="display:block;width:100%;text-align:left"
                                          >
                                            <p
                                              style="margin:0px;word-break:break-all;font-size:14px;line-height:24px"
                                            >
                                              {{ user.email | escape }}
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <hr
                                      style="margin-top:0.5rem;margin-bottom:0.5rem;border-width:1px;border-color:rgb(229,229,229);width:100%;border:none;border-top:1px solid #eaeaea"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="max-width:37.5em"
                            >
                              <tbody>
                                <tr style="width:100%">
                                  <td>
                                    <table
                                      align="center"
                                      width="100%"
                                      id="Verify Link:"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="height:2rem"
                                    >
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td
                                            class="sm_w-1_5 sm_table-cell"
                                            data-id="__react-email-column"
                                            style="display:block;width:100%;text-align:left"
                                          >
                                            <p style="margin:0px;font-weight:600;font-size:14px;line-height:24px">
                                              ${localizeMessage("verifyLink")}:
                                            </p>
                                          </td>
                                          <td
                                            class="sm_w-3_5 sm_table-cell"
                                            data-id="__react-email-column"
                                            style="display:block;width:100%;text-align:left"
                                          >
                                            <a
                                              href="{{ url | remove: "#" }}&ui_locales={{user.user_metadata.lang}}"
                                              style="margin:0px;word-break:break-all;color:rgb(0,0,0);text-underline-offset:4px;text-decoration:underline"
                                              target="_blank"
                                              >{{ url | escape }}</a
                                            >
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="width:100%;text-align:center;max-width:37.5em"
                    >
                      <tbody>
                        <tr style="width:100%">
                          <td>
                            <a
                              href="{{ url | remove: "#" }}&ui_locales={{user.user_metadata.lang}}"
                              style="margin-left:auto;margin-right:auto;box-sizing:border-box;width:fit-content;min-width:160px;border-radius:0.5rem;background-color:rgb(23,23,23);padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;font-weight:600;color:rgb(255,255,255);text-decoration:none;display:inline-block;max-width:100%;mso-padding-alt:0px;padding:8px 12px 8px 12px"
                              target="_blank"
                              ><span
                                ><!--[if mso
                                  ]><i style="mso-font-width:300%;mso-text-raise:12" hidden>&#8202;&#8202;</i><!
                                [endif]--></span
                              ><span
                                style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:6px"
                                >${localizeMessage("verifyYourAccount")}</span
                              ><span
                                ><!--[if mso
                                  ]><i style="mso-font-width:300%" hidden>&#8202;&#8202;&#8203;</i><!
                                [endif]--></span
                              ></a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              id="issue-note"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="text-align:center;margin-top:1.5rem"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="width:100%;text-align:center;max-width:37.5em"
                    >
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              id="footer"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="margin-top:1.5rem"
            >
              <tbody>
                <tr>
                  <td>
                    <hr
                      style="margin-top:0.75rem;margin-bottom:1.5rem;border-width:1px;border-color:rgb(212,212,212);width:100%;border:none;border-top:1px solid #eaeaea"
                    />
                    <p
                      style="text-align:center;font-size:0.75rem;line-height:1rem;color:rgb(163,163,163);margin:16px 0"
                    >
                      ${localizeMessage("footer")}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="margin-top:1rem;max-width:37.5em"
    >
      <tbody>
        <tr style="width:100%">
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="width:fit-content;opacity:0.5"
            >
              <tbody style="width:100%">
                <tr style="width:100%">
                  <td align="right" data-id="__react-email-column" style="height:40px;width:fit-content">
                    <p
                      style="margin-top:-0.5rem;font-size:0.75rem;line-height:1rem;color:rgb(23,23,23);margin:16px 0"
                    >
                      ${localizeMessage("poweredBy")}:
                    </p>
                  </td>
                  <td align="left" data-id="__react-email-column" style="height:40px;width:fit-content">
                    <a
                      href="https://auth0.com"
                      style="display:block;color:#067df7;text-decoration:none"
                      target="_blank"
                      ><img
                        alt="auth0 Logo":
                        height="24"
                        src="https://cdn.auth0.com/website/email/auth0-lockup-en-onlight.png"
                        style="margin-left:0.5rem;margin-top:2px;display:inline-block;width:auto;outline:none;border:none;text-decoration:none"
                        width="auto"
                    /></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;

export default html;
