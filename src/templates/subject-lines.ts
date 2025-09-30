import { localizeMessage } from "../scripts";

const html= `<html>
<p>
  Change password email:
  ${localizeMessage("changePassword")}
</p>


<p>
  Verification email:
  ${localizeMessage("verifyYourAccount")}
</p>

<p>
  Blocked account email:
  ${localizeMessage("suspiciousActivity")}
</p>

<p>
  Password breach alert:
  ${localizeMessage("accountHacked")}
</p>

</html>`

export default html