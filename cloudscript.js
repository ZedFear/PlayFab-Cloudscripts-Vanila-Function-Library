//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Account Management
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as authentication credentials, as the intent is that it is easily accessible by other players.
 * @param {GenericServiceId} genericId
 * *REQUIRED* Generic service identifier to add to the player account.
 * @param {string} playFabId
 * *REQUIRED* PlayFabId of the user to link.
 */
function AddGenericID(genericId, playFabId)
{
    var AddGenericID = server.AddGenericID(
    {
        GenericId: genericId,
        PlayFabId: playFabId
    });
    return(AddGenericID);
}
/**
 * Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
 * @param {BanRequest[]} bans
 * *REQUIRED* List of ban requests to be applied. Maximum 100.
 */
function BanUsers(bans)
{
    var BanUsers = server.BanUsers(
    {
        Bans: bans
    });
    return(BanUsers);
}
/**
 * Removes a user's player account from a title and deletes all associated data
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function DeletePlayer(playFabId)
{
    var DeletePlayer = server.DeletePlayer(
    {
        PlayFabId: playFabId
    });
    return(DeletePlayer);
}
/**
 * Deletes push notification template for title
 * @param {string} pushNotificationTemplateId
 * *REQUIRED* Id of the push notification template to be deleted.
 */
function DeletePushNotificationTemplate(pushNotificationTemplateId)
{
    var DeletePushNotificationTemplate = server.DeletePushNotificationTemplate(
    {
        PushNotificationTemplateId: pushNotificationTemplateId
    });
    return(DeletePushNotificationTemplate);
}
/**
 * Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
 * @param {string[]} facebookIDs
 * *REQUIRED* Array of unique Facebook identifiers for which the title needs to get PlayFab identifiers. The array cannot exceed 2,000 in length.
 */
function GetPlayFabIDsFromFacebookIDs(facebookIDs)
{
    var GetPlayFabIDsFromFacebookIDs = server.GetPlayFabIDsFromFacebookIDs(
    {
        FacebookIDs: facebookIDs
    });
    return(GetPlayFabIDsFromFacebookIDs);
}
/**
 * Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Games identifiers.
 * @param {string[]} facebookInstantGamesIds
 * *REQUIRED* Array of unique Facebook Instant Games identifiers for which the title needs to get PlayFab identifiers. The array cannot exceed 25 in length.
 */
function GetPlayFabIDsFromFacebookInstantGamesIds(facebookInstantGamesIds)
{
    var GetPlayFabIDsFromFacebookInstantGamesIds = server.GetPlayFabIDsFromFacebookInstantGamesIds(
    {
        FacebookInstantGamesIds: facebookInstantGamesIds
    });
    return(GetPlayFabIDsFromFacebookInstantGamesIds);
}
/**
 * Retrieves the unique PlayFab identifiers for the given set of generic service identifiers. A generic identifier is the service name plus the service-specific ID for the player, as specified by the title when the generic identifier was added to the player account.
 * @param {GenericServiceId[]} genericIDs
 * *REQUIRED* Array of unique generic service identifiers for which the title needs to get PlayFab identifiers. Currently limited to a maximum of 10 in a single request. https://learn.microsoft.com/en-us/rest/api/playfab/server/account-management/get-playfab-ids-from-generic-ids?view=playfab-rest#genericserviceid
 */
function GetPlayFabIDsFromGenericIDs(genericIDs)
{
    var GetPlayFabIDsFromGenericIDs = server.GetPlayFabIDsFromGenericIDs(
    {
        GenericIDs: genericIDs
    });
    return(GetPlayFabIDsFromGenericIDs);
}
/**
 * Retrieves the unique PlayFab identifiers for the given set of Nintendo Service Account identifiers.
 * @param {string[]} nintendoAccountIds
 * *REQUIRED* Array of unique Nintendo Switch Account identifiers for which the title needs to get PlayFab identifiers. The array cannot exceed 2,000 in length.
 */
function GetPlayFabIDsFromNintendoServiceAccountIds(nintendoAccountIds)
{
    var GetPlayFabIDsFromNintendoServiceAccountIds = server.GetPlayFabIDsFromNintendoServiceAccountIds(
    {
        NintendoAccountIds: nintendoAccountIds
    });
    return(GetPlayFabIDsFromNintendoServiceAccountIds);
}
/**
 * Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
 * @param {string[]} nintendoSwitchDeviceIds
 * *REQUIRED* Array of unique Nintendo Switch Device identifiers for which the title needs to get PlayFab identifiers. The array cannot exceed 2,000 in length.
 */
function GetPlayFabIDsFromNintendoSwitchDeviceIds(nintendoSwitchDeviceIds)
{
    var GetPlayFabIDsFromNintendoSwitchDeviceIds = server.GetPlayFabIDsFromNintendoSwitchDeviceIds(
    {
        NintendoSwitchDeviceIds: nintendoSwitchDeviceIds
    });
    return(GetPlayFabIDsFromNintendoSwitchDeviceIds);
}
/**
 * Retrieves the unique PlayFab identifiers for the given set of PlayStation ™️ Network identifiers.
 * @param {string[]} psnAccountIDs
 * *REQUIRED* Array of unique PlayStation ™️ Network identifiers for which the title needs to get PlayFab identifiers. The array cannot exceed 2,000 in length.
 * @param {number} issuerId
 * Id of the PlayStation ™️ Network issuer environment. If null, defaults to production environment.
 */
function GetPlayFabIDsFromPSNAccountIDs(psnAccountIDs, issuerId)
{
    var GetPlayFabIDsFromPSNAccountIDs = server.GetPlayFabIDsFromPSNAccountIDs(
    {
        PSNAccountIDs: psnAccountIDs,
        IssuerId: issuerId
    });
    return(GetPlayFabIDsFromPSNAccountIDs);
}
/**
 * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
 * @param {string[]} steamStringIDs
 * *REQUIRED* Array of unique Steam identifiers (Steam profile IDs) for which the title needs to get PlayFab identifiers. The array cannot exceed 2,000 in length.
 */
function GetPlayFabIDsFromSteamIDs(steamStringIDs)
{
    var GetPlayFabIDsFromSteamIDs = server.GetPlayFabIDsFromSteamIDs(
    {
        SteamStringIDs: steamStringIDs
    });
    return(GetPlayFabIDsFromSteamIDs);
}
/**
 * Retrieves the unique PlayFab identifiers for the given set of Twitch identifiers. The Twitch identifiers are the IDs for the user accounts, available as "_id" from the Twitch API methods (ex: https://github.com/justintv/Twitch-API/blob/master/v3_resources/users.md#get-usersuser).
 * @param {string[]} twitchIds
 * *REQUIRED* Array of unique Twitch identifiers (Twitch's _id) for which the title needs to get PlayFab identifiers. The array cannot exceed 2,000 in length.
 */
function GetPlayFabIDsFromTwitchIDs(twitchIds)
{
    var GetPlayFabIDsFromTwitchIDs = server.GetPlayFabIDsFromTwitchIDs(
    {
        TwitchIds: twitchIds
    });
    return(GetPlayFabIDsFromTwitchIDs);
}
/**
 * Retrieves the unique PlayFab identifiers for the given set of XboxLive identifiers.
 * @param {string[]} xboxLiveAccountIDs
 * *REQUIRED* Array of unique Xbox Live account identifiers for which the title needs to get PlayFab identifiers. The array cannot exceed 2,000 in length.
 * @param {string} sandbox
 * The ID of Xbox Live sandbox.
 */
function GetPlayFabIDsFromXboxLiveIDs(xboxLiveAccountIDs, sandbox)
{
    var GetPlayFabIDsFromXboxLiveIDs = server.GetPlayFabIDsFromXboxLiveIDs(
    {
        XboxLiveAccountIDs: xboxLiveAccountIDs,
        Sandbox: sandbox
    });
    return(GetPlayFabIDsFromXboxLiveIDs);
}
/**
 * Retrieves the player's profile
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {PlayerProfileViewConstraints} profileConstraints
 * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section. https://learn.microsoft.com/en-us/rest/api/playfab/server/account-management/get-player-profile?view=playfab-rest#playerprofileviewconstraints
 */
function GetPlayerProfile(playFabId, profileConstraints)
{
    var GetPlayerProfile = server.GetPlayerProfile(
    {
        PlayFabId: playFabId,
        ProfileConstraints: profileConstraints
    });
    return(GetPlayerProfile);
}
/**
 * Retrieves the associated PlayFab account identifiers for the given set of server custom identifiers.
 * @param {string[]} playFabIDs
 * *REQUIRED* Array of unique PlayFab player identifiers for which the title needs to get server custom identifiers. Cannot contain more than 25 identifiers.
 */
function GetServerCustomIDsFromPlayFabIDs(playFabIDs)
{
    var GetServerCustomIDsFromPlayFabIDs = server.GetServerCustomIDsFromPlayFabIDs(
    {
        PlayFabIDs: playFabIDs
    });
    return(GetServerCustomIDsFromPlayFabIDs);
}
/**
 * Retrieves the relevant details for a specified user
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function GetUserAccountInfo(playFabId)
{
    var GetUserAccountInfo = server.GetUserAccountInfo(
    {
        PlayFabId: playFabId
    });
    return(GetUserAccountInfo);
}
/**
 * Gets all bans for a user.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function GetUserBans(playFabId)
{
    var GetUserBans = server.GetUserBans(
    {
        PlayFabId: playFabId
    });
    return(GetUserBans);
}
/**
 * Links the Nintendo account associated with the token to the user's PlayFab account
 * @param {string} identityToken
 * *REQUIRED* The JSON Web token (JWT) returned by Nintendo after login. Used to validate the request and find the user ID (Nintendo Switch subject) to link with.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {boolean} forceLink
 * If another user is already linked to a specific Nintendo Switch account, unlink the other user and re-link.
 */
function LinkNintendoServiceAccount(identityToken, playFabId, forceLink)
{
    var LinkNintendoServiceAccount = server.LinkNintendoServiceAccount(
    {
        IdentityToken: identityToken,
        PlayFabId: playFabId,
        ForceLink: forceLink
    });
    return(LinkNintendoServiceAccount);
}
/**
 * Links the NintendoSwitchDeviceId to the user's PlayFab account
 * @param {string} nintendoSwitchDeviceId
 * *REQUIRED* Nintendo Switch unique identifier for the user's device.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {boolean} forceLink
 * If another user is already linked to the Nintendo Switch Device ID, unlink the other user and re-link.
 */
function LinkNintendoSwitchDeviceId(nintendoSwitchDeviceId, playFabId, forceLink)
{
    var LinkNintendoSwitchDeviceId = server.LinkNintendoSwitchDeviceId(
    {
        NintendoSwitchDeviceId: nintendoSwitchDeviceId,
        PlayFabId: playFabId,
        ForceLink: forceLink
    });
    return(LinkNintendoSwitchDeviceId);
}
/**
 * Links the PlayStation ™️ Network account associated with the provided access code to the user's PlayFab account
 * @param {string} authCode
 * *REQUIRED* Authentication code provided by the PlayStation ™️ Network.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {string} redirectUri
 * *REQUIRED* Redirect URI supplied to PlayStation ™️ Network when requesting an auth code
 * @param {boolean} forceLink
 * If another user is already linked to the account, unlink the other user and re-link.
 * @param {number} issuerId
 * Id of the PlayStation ™️ Network issuer environment. If null, defaults to production environment.
 */
function LinkPSNAccount(authCode, playFabId, redirectUri, forceLink, issuerId)
{
    var LinkPSNAccount = server.LinkPSNAccount(
    {
        AuthCode: authCode,
        PlayFabId: playFabId,
        RedirectUri: redirectUri,
        ForceLink: forceLink,
        IssuerId: issuerId
    });
    return(LinkPSNAccount);
}
/**
 * Links the custom server identifier, generated by the title, to the user's PlayFab account.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab identifier.
 * @param {string} serverCustomId
 * *REQUIRED* Unique server custom identifier for this player.
 * @param {boolean} forceLink
 * If another user is already linked to the custom ID, unlink the other user and re-link.
 */
function LinkServerCustomId(playFabId, serverCustomId, forceLink)
{
    var LinkServerCustomId = server.LinkServerCustomId(
    {
        PlayFabId: playFabId,
        ServerCustomId: serverCustomId,
        ForceLink: forceLink
    });
    return(LinkServerCustomId);
}
/**
 * Links the Xbox Live account associated with the provided access code to the user's PlayFab account
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier.
 * @param {string} xboxToken
 * *REQUIRED* Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", "").
 * @param {boolean} forceLink
 * If another user is already linked to the account, unlink the other user and re-link.
 */
function LinkXboxAccount(playFabId, xboxToken, forceLink)
{
    var LinkXboxAccount = server.LinkXboxAccount(
    {
        PlayFabId: playFabId,
        XboxToken: xboxToken,
        ForceLink: forceLink
    });
    return(LinkXboxAccount);
}
/**
 * Removes the specified generic service identifier from the player's PlayFab account.
 * @param {GenericServiceId} genericId
 * *REQUIRED* Generic service identifier to be removed from the player.
 * @param {string} playFabId
 * *REQUIRED* PlayFabId of the user to remove.
 */
function RemoveGenericID(genericId, playFabId)
{
    var RemoveGenericID = server.RemoveGenericID(
    {
        PlayFabId: playFabId,
        GenericId: genericId
    });
    return(RemoveGenericID);
}
/**
 * Revoke all active bans for a user.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function RevokeAllBansForUser(playFabId)
{
    var RevokeAllBansForUser = server.RevokeAllBansForUser(
    {
        PlayFabId: playFabId
    });
    return(RevokeAllBansForUser);
}
/**
 * Revoke all active bans specified with BanId.
 * @param {string[]} banIds
 * *REQUIRED* Ids of the bans to be revoked. Maximum 100.
 */
function RevokeBans(banIds)
{
    var RevokeBans = server.RevokeBans(
    {
        BanIds: banIds
    });
    return(RevokeBans);
}
/**
 * Saves push notification template for title
 * @param {string} name
 * *REQUIRED* Name of the push notification template.
 * @param {string} androidPayload
 * Android JSON for the notification template.
 * @param {string} iosPayload
 * IOS JSON for the notification template.
 * @param {string} id
 * Id of the push notification template.
 * @param {LocalizedPushNotificationProperties} localizedPushNotificationTemplates
 * Dictionary of localized push notification templates with the language as the key.
 */
function SavePushNotificationTemplate(name, androidPayload, iosPayload, id, localizedPushNotificationTemplates)
{
    var SavePushNotificationTemplate = server.SavePushNotificationTemplate(
    {
        Name: name,
        AndroidPayload: androidPayload,
        IOSPayload: iosPayload,
        Id: id,
        LocalizedPushNotificationTemplates: localizedPushNotificationTemplates
    });
    return(SavePushNotificationTemplate);
}
/**
 * Forces an email to be sent to the registered contact email address for the user's account based on an account recovery email template
 * @param {string} emailTemplateId
 * *REQUIRED* The email template id of the account recovery email template to send.
 * @param {string} email
 * User email address attached to their account
 * @param {string} username
 * The user's username requesting an account recovery.
 */
function SendCustomAccountRecoveryEmail(emailTemplateId, email, username)
{
    var SendCustomAccountRecoveryEmail = server.SendCustomAccountRecoveryEmail(
    {
        EmailTemplateId: emailTemplateId,
        Email: email,
        Username: username
    });
    return(SendCustomAccountRecoveryEmail);
}
/**
 * Sends an email based on an email template to a player's contact email
 * @param {string} emailTemplateId
 * *REQUIRED* The email template id of the email template to send.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function SendEmailFromTemplate(emailTemplateId, playFabId)
{
    var SendEmailFromTemplate = server.SendEmailFromTemplate(
    {
        EmailTemplateId: emailTemplateId,
        PlayFabId: playFabId
    });
    return(SendEmailFromTemplate);
}
/**
 * Sends an iOS/Android Push Notification to a specific user, if that user's device has been configured for Push Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
 * @param {string} recipient
 * *REQUIRED* PlayFabId of the recipient of the push notification.
 * @param {AdvancedPushPlatformMsg[]} advancedPlatformDelivery
 * Allows you to provide precisely formatted json to target devices. This is an advanced feature, allowing you to deliver to custom plugin logic, fields, or functionality not natively supported by PlayFab.
 * @param {string} message
 * Text of message to send.
 * @param {PushNotificationPackage} package
 * Defines all possible push attributes like message, title, icon, etc. Some parameters are device specific - please see the PushNotificationPackage documentation for details.
 * @param {string} subject
 * Subject of message to send (may not be displayed in all platforms)
 * @param {string[]} targetPlatforms
 * Target Platforms that should receive the Message or Package. If omitted, we will send to all available platforms.
 */
function SendPushNotification(recipient, advancedPlatformDelivery, message, package, subject, targetPlatforms)
{
    var SendPushNotification = server.SendPushNotification(
    {
        Recipient: recipient,
        AdvancedPlatformDelivery: advancedPlatformDelivery,
        Message: message,
        Package: package,
        Subject: subject,
        TargetPlatforms: targetPlatforms
    });
    return(SendPushNotification);
}
/**
 * Sends an iOS/Android Push Notification template to a specific user, if that user's device has been configured for Push Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
 * @param {string} pushNotificationTemplateId
 * *REQUIRED* Id of the push notification template.
 * @param {string} recipient
 * *REQUIRED* PlayFabId of the push notification recipient.
 */
function SendPushNotificationFromTemplate(pushNotificationTemplateId, recipient)
{
    var SendPushNotificationFromTemplate = server.SendPushNotificationFromTemplate(
    {
        PushNotificationTemplateId: pushNotificationTemplateId,
        Recipient: recipient
    });
    return(SendPushNotificationFromTemplate);
}
/**
 * Unlinks the related Nintendo account from the user's PlayFab account
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function UnlinkNintendoServiceAccount(playFabId)
{
    var UnlinkNintendoServiceAccount = server.UnlinkNintendoServiceAccount(
    {
        PlayFabId: playFabId
    });
    return(UnlinkNintendoServiceAccount);
}
/**
 * Unlinks the related NintendoSwitchDeviceId from the user's PlayFab account
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {string} nintendoSwitchDeviceId
 * Nintendo Switch Device identifier for the user. If not specified, the most recently signed in device ID will be used.
 */
function UnlinkNintendoSwitchDeviceId(playFabId, nintendoSwitchDeviceId)
{
    var UnlinkNintendoSwitchDeviceId = server.UnlinkNintendoSwitchDeviceId(
    {
        PlayFabId: playFabId,
        NintendoSwitchDeviceId: nintendoSwitchDeviceId
    });
    return(UnlinkNintendoSwitchDeviceId);
}
/**
 * Unlinks the related PlayStation ™️ Network account from the user's PlayFab account
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function UnlinkPSNAccount(playFabId)
{
    var UnlinkPSNAccount = server.UnlinkPSNAccount(
    {
        PlayFabId: playFabId
    });
    return(UnlinkPSNAccount);
}
/**
 * Unlinks the custom server identifier from the user's PlayFab account.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab identifier.
 * @param {string} serverCustomId
 * *REQUIRED* Unique server custom identifier for this player.
 */
function UnlinkServerCustomId(playFabId, serverCustomId)
{
    var UnlinkServerCustomId = server.UnlinkServerCustomId(
    {
        PlayFabId: playFabId,
        ServerCustomId: serverCustomId
    });
    return(UnlinkServerCustomId);
}
/**
 * Unlinks the related Xbox Live account from the user's PlayFab account
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier.
 */
function UnlinkXboxAccount(playFabId)
{
    var UnlinkXboxAccount = server.UnlinkXboxAccount(
    {
        PlayFabId: playFabId
    });
    return(UnlinkXboxAccount);
}
/**
 * Update the avatar URL of the specified player
 * @param {string} imageUrl
 * *REQUIRED* URL of the avatar image. If empty, it removes the existing avatar URL.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function UpdateAvatarUrl(imageUrl, playFabId)
{
    var UpdateAvatarUrl = server.UpdateAvatarUrl(
    {
        ImageUrl: imageUrl,
        PlayFabId: playFabId
    });
    return(UpdateAvatarUrl);
}
/**
 * Updates information of a list of existing bans specified with Ban Ids.
 * @param {UpdateBanRequest[]} bans
 * *REQUIRED* List of bans to be updated. Maximum 100.
 */
function UpdateBans(bans)
{
    var UpdateBans = server.UpdateBans(
    {
        Bans: bans
    });
    return(UpdateBans);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Analytics
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Writes a character-based event into PlayStream.
 * @param {string} characterId
 * *REQUIRED* Unique PlayFab assigned ID for a specific character owned by a user
 * @param {string} eventName
 * *REQUIRED* The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it commonly follows the subject_verb_object pattern (e.g. player_logged_in).
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {object} body
 * Custom event properties. Each property consists of a name (string) and a value (JSON object).
 * @param {string} timestamp
 * The time (in UTC) associated with this event. The value defaults to the current time.
 */
function WriteCharacterEvent(characterId, eventName, playFabId, body, timestamp)
{
    var WriteCharacterEvent = server.WriteCharacterEvent(
    {
        CharacterId: characterId,
        EventName: eventName,
        PlayFabId: playFabId,
        Body: body,
        Timestamp: timestamp
    });
    return(WriteCharacterEvent);
}
/**
 * Writes a player-based event into PlayStream.
 * @param {string} eventName
 * *REQUIRED* The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it commonly follows the subject_verb_object pattern (e.g. player_logged_in).
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {object} body
 * Custom data properties associated with the event. Each property consists of a name (string) and a value (JSON object).
 * @param {string} timestamp
 * The time (in UTC) associated with this event. The value defaults to the current time.
 */
function WritePlayerEvent(eventName, playFabId, body, timestamp)
{
    var WritePlayerEvent = server.WritePlayerEvent(
    {
        EventName: eventName,
        PlayFabId: playFabId,
        Body: body,
        Timestamp: timestamp
    });
    return(WritePlayerEvent);
}
/**
 * Writes a title-based event into PlayStream.
 * @param {string} eventName
 * *REQUIRED* The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it commonly follows the subject_verb_object pattern (e.g. player_logged_in).
 * @param {object} body
 * Custom event properties. Each property consists of a name (string) and a value (JSON object).
 * @param {string} timestamp
 * The time (in UTC) associated with this event. The value defaults to the current time.
 */
function WriteTitleEvent(eventName, body, timestamp)
{
    var WriteTitleEvent = server.WriteTitleEvent(
    {
        EventName: eventName,
        Body: body,
        Timestamp: timestamp
    });
    return(WriteTitleEvent);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Authentication
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Validated a client's session ticket, and if successful, returns details for that user
 * @param {string} sessionTicket
 * *REQUIRED* Session ticket as issued by a PlayFab client login API.
 */
 function AuthenticateSessionTicket(sessionTicket)
 {
     var AuthenticateSessionTicket = server.AuthenticateSessionTicket(
     {
        SessionTicket: sessionTicket
     });
     return(AuthenticateSessionTicket);
 }
/**
 * Securely login a game client from an external server backend using a custom identifier for that player. Server Custom ID and Client Custom ID are mutually exclusive and cannot be used to retrieve the same player account.
 * @param {boolean} createAccount
 * Automatically create a PlayFab account if one is not currently linked to this ID.
 * @param {GetPlayerCombinedInfoRequestParams} infoRequestParameters
 * Flags for which pieces of info to return for the user.
 * @param {string} playerSecret
 * Player secret that is used to verify API request signatures (Enterprise Only).
 * @param {string} serverCustomId
 * The backend server identifier for this player.
 */
function LoginWithServerCustomId(createAccount, infoRequestParameters, playerSecret, serverCustomId)
{
    var LoginWithServerCustomId = server.LoginWithServerCustomId(
    {
        CreateAccount: createAccount,
        InfoRequestParameters: infoRequestParameters,
        PlayerSecret: playerSecret,
        ServerCustomId: serverCustomId
    });
    return(LoginWithServerCustomId);
}
/**
 * Signs the user in using an Steam ID, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {string} steamId
 * *REQUIRED* Unique Steam identifier for a user
 * @param {boolean} createAccount
 * Automatically create a PlayFab account if one is not currently linked to this ID.
 * @param {GetPlayerCombinedInfoRequestParams} infoRequestParameters
 * Flags for which pieces of info to return for the user.
 */
function LoginWithSteamId(steamId, createAccount, infoRequestParameters)
{
    var LoginWithSteamId = server.LoginWithSteamId(
    {
        SteamId: steamId,
        CreateAccount: createAccount,
        InfoRequestParameters: infoRequestParameters
    });
    return(LoginWithSteamId);
}
/**
 * Signs the user in using a Xbox Live Token from an external server backend, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {string} xboxToken
 * *REQUIRED* Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", "").
 * @param {boolean} createAccount
 * Automatically create a PlayFab account if one is not currently linked to this ID.
 * @param {GetPlayerCombinedInfoRequestParams} infoRequestParameters
 * Flags for which pieces of info to return for the user.
 */
function LoginWithXbox(xboxToken, createAccount, infoRequestParameters)
{
    var LoginWithXbox = server.LoginWithXbox(
    {
        XboxToken: xboxToken,
        CreateAccount: createAccount,
        InfoRequestParameters: infoRequestParameters
    });
    return(LoginWithXbox);
}
/**
 * Signs the user in using an Xbox ID and Sandbox ID, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {string} sandbox
 * *REQUIRED* The id of Xbox Live sandbox.
 * @param {string} xboxId
 * *REQUIRED* Unique Xbox identifier for a user
 * @param {boolean} createAccount
 * Automatically create a PlayFab account if one is not currently linked to this ID.
 * @param {GetPlayerCombinedInfoRequestParams} infoRequestParameters
 * Flags for which pieces of info to return for the user.
 */
function LoginWithXboxId(sandbox, xboxId, createAccount, infoRequestParameters)
{
    var LoginWithXboxId = server.LoginWithXboxId(
    {
        Sandbox: sandbox,
        XboxId: xboxId,
        CreateAccount: createAccount,
        InfoRequestParameters: infoRequestParameters
    });
    return(LoginWithXboxId);
}
/**
 * Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's secret use the Admin or Server API method SetPlayerSecret.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {string} playerSecret
 * Player secret that is used to verify API request signatures (Enterprise Only).
 */
function SetPlayerSecret(playFabId, playerSecret)
{
    var SetPlayerSecret = server.SetPlayerSecret(
    {
        PlayFabId: playFabId,
        PlayerSecret: playerSecret
    });
    return(SetPlayerSecret);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Character Data
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Retrieves the title-specific custom data for the user which is readable and writable by the client
 * @param {string} characterId
 * *REQUIRED* Unique PlayFab assigned ID for a specific character owned by a user
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {number} ifChangedFromDataVersion
 * The version that currently exists according to the caller. The call will return the data for all of the keys if the version in the system is greater than this.
 * @param {string[]} keys
 * Specific keys to search for in the custom user data.
 */
function GetCharacterData(characterId, playFabId, ifChangedFromDataVersion, keys)
{
    var GetCharacterData = server.GetCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetCharacterData);
}
/**
 * Retrieves the title-specific custom data for the user's character which cannot be accessed by the client
 * @param {string} characterId
 * *REQUIRED* Unique PlayFab assigned ID for a specific character owned by a user
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {number} ifChangedFromDataVersion
 * The version that currently exists according to the caller. The call will return the data for all of the keys if the version in the system is greater than this.
 * @param {string[]} keys
 * Specific keys to search for in the custom user data.
 */
function GetCharacterInternalData(characterId, playFabId, ifChangedFromDataVersion, keys)
{
    var GetCharacterInternalData = server.GetCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetCharacterInternalData);
}
/**
 * Retrieves the title-specific custom data for the user's character which can only be read by the client
 * @param {string} characterId
 * *REQUIRED* Unique PlayFab assigned ID for a specific character owned by a user
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {number} ifChangedFromDataVersion
 * The version that currently exists according to the caller. The call will return the data for all of the keys if the version in the system is greater than this.
 * @param {string[]} keys
 * Specific keys to search for in the custom user data.
 */
function GetCharacterReadOnlyData(characterId, playFabId, ifChangedFromDataVersion, keys)
{
    var GetCharacterReadOnlyData = server.GetCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetCharacterReadOnlyData);
}
/**
 * Updates the title-specific custom data for the user's character which is readable and writable by the client
 * @param {string} characterId
 * *REQUIRED* Unique PlayFab assigned ID for a specific character owned by a user
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {object} data
 * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may not begin with a '!' character or be null.
 * @param {string[]} keysToRemove
 * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language constraints. Use this to delete the keys directly.
 * @param {UserDataPermission} permission
 * Permission to be applied to all user data keys written in this request. Defaults to "private" if not set.
 */
function UpdateCharacterData(characterId, playFabId, data, keysToRemove, permission)
{
    var UpdateCharacterData = server.UpdateCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateCharacterData);
}
/**
 * Updates the title-specific custom data for the user's character which cannot be accessed by the client
 * @param {string} characterId
 * *REQUIRED* Unique PlayFab assigned ID for a specific character owned by a user
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {object} data
 * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may not begin with a '!' character or be null.
 * @param {string[]} keysToRemove
 * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language constraints. Use this to delete the keys directly.
 * @param {UserDataPermission} permission
 * Permission to be applied to all user data keys written in this request. Defaults to "private" if not set.
 */
function UpdateCharacterInternalData(characterId, playFabId, data, keysToRemove, permission)
{
    var UpdateCharacterInternalData = server.UpdateCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateCharacterInternalData);
}
/**
 * Updates the title-specific custom data for the user's character which can only be read by the client
 * @param {string} characterId
 * *REQUIRED* Unique PlayFab assigned ID for a specific character owned by a user
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {object} data
 * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may not begin with a '!' character or be null.
 * @param {string[]} keysToRemove
 * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language constraints. Use this to delete the keys directly.
 * @param {UserDataPermission} permission
 * Permission to be applied to all user data keys written in this request. Defaults to "private" if not set.
 */
function UpdateCharacterReadOnlyData(characterId, playFabId, data, keysToRemove, permission)
{
    var UpdateCharacterReadOnlyData = server.UpdateCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateCharacterReadOnlyData);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Characters
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Deletes the specific character ID from the specified user.
 * @param {string} characterId
 * *REQUIRED* Unique PlayFab assigned ID for a specific character owned by a user
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {boolean} saveCharacterInventory
 * *REQUIRED* If true, the character's inventory will be transferred up to the owning user; otherwise, this request will purge those items.
 */
function DeleteCharacterFromUser(characterId, playFabId, saveCharacterInventory)
{
    var DeleteCharacterFromUser = server.DeleteCharacterFromUser(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        SaveCharacterInventory: saveCharacterInventory
    });
    return(DeleteCharacterFromUser);
}
/**
 * Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be evaluated with the parent PlayFabId to guarantee uniqueness.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function GetAllUsersCharacters(playFabId)
{
    var GetAllUsersCharacters = server.GetAllUsersCharacters(
    {
        PlayFabId: playFabId
    });
    return(GetAllUsersCharacters);
}
/**
 * Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
 * @param {number} maxResultsCount
 * *REQUIRED* Maximum number of entries to retrieve.
 * @param {number} startPosition
 * *REQUIRED* First entry in the leaderboard to be retrieved.
 * @param {string} statisticName
 * *REQUIRED* Unique identifier for the title-specific statistic for the leaderboard.
 */
function GetCharacterLeaderboard(maxResultsCount, startPosition, statisticName)
{
    var GetCharacterLeaderboard = server.GetCharacterLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        StartPosition: startPosition,
        StatisticName: statisticName
    });
    return(GetCharacterLeaderboard);
}
/**
 * Retrieves the details of all title-specific statistics for the specific character
 * @param {string} characterId
 * *REQUIRED* Unique PlayFab assigned ID for a specific character owned by a user
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function GetCharacterStatistics(characterId, playFabId)
{
    var GetCharacterStatistics = server.GetCharacterStatistics(
    {
        CharacterId: characterId,
        PlayFabId: playFabId
    });
    return(GetCharacterStatistics);
}
/**
 * Retrieves a list of ranked characters for the given statistic, centered on the requested user
 * @param {string} characterId
 * *REQUIRED* Unique PlayFab assigned ID for a specific character owned by a user
 * @param {number} maxResultsCount
 * *REQUIRED* Maximum number of entries to retrieve.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {string} statisticName
 * *REQUIRED* Unique identifier for the title-specific statistic for the leaderboard.
 */
function GetLeaderboardAroundCharacter(characterId, maxResultsCount, playFabId, statisticName)
{
    var GetLeaderboardAroundCharacter = server.GetLeaderboardAroundCharacter(
    {
        CharacterId: characterId,
        MaxResultsCount: maxResultsCount,
        PlayFabId: playFabId,
        StatisticName: statisticName
    });
    return(GetLeaderboardAroundCharacter);
}
/**
 * Retrieves a list of all of the user's characters for the given statistic.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {string} statisticName
 * *REQUIRED* Unique identifier for the title-specific statistic for the leaderboard.
 */
function GetLeaderboardForUserCharacters(playFabId, statisticName)
{
    var GetLeaderboardForUserCharacters = server.GetLeaderboardForUserCharacters(
    {
        PlayFabId: playFabId,
        StatisticName: statisticName
    });
    return(GetLeaderboardForUserCharacters);
}
/**
 * Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated with the parent PlayFabId to guarantee uniqueness.
 * @param {string} characterName
 * *REQUIRED* Non-unique display name of the character being granted (1-40 characters in length).
 * @param {string} characterType
 * *REQUIRED* Type of the character being granted; statistics can be sliced based on this value.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function GrantCharacterToUser(characterName, characterType, playFabId)
{
    var GrantCharacterToUser = server.GrantCharacterToUser(
    {
        CharacterName: characterName,
        CharacterType: characterType,
        PlayFabId: playFabId
    });
    return(GrantCharacterToUser);
}
/**
 * Updates the values of the specified title-specific statistics for the specific character
 * @param {string} characterId
 * *REQUIRED* Unique PlayFab assigned ID for a specific character owned by a user
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {object} characterStatistics
 * Statistics to be updated with the provided values.
 */
function UpdateCharacterStatistics(characterId, playFabId, characterStatistics)
{
    var UpdateCharacterStatistics = server.UpdateCharacterStatistics(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        CharacterStatistics: characterStatistics
    });
    return(UpdateCharacterStatistics);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Content
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * This API retrieves a pre-signed URL for accessing a content file for the title. A subsequent HTTP GET to the returned URL will attempt to download the content. A HEAD query to the returned URL will attempt to retrieve the metadata of the content. Note that a successful result does not guarantee the existence of this content - if it has not been uploaded, the query to retrieve the data will fail. See this post for more information: https://community.playfab.com/hc/community/posts/205469488-How-to-upload-files-to-PlayFab-s-Content-Service. Also, please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN rates apply.
 * @param {string} key
 * *REQUIRED* Key of the content item to fetch, usually formatted as a path, e.g. images/a.png
 * @param {string} httpMethod
 * HTTP method to fetch item - GET or HEAD. Use HEAD when only fetching metadata. Default is GET.
 * @param {boolean} thruCDN
 * True to download through CDN. CDN provides higher download bandwidth and lower latency. However, if you want the latest, non-cached version of the content during development, set this to false. Default is true.
 */
function GetContentDownloadUrl(key, httpMethod, thruCDN)
{
    var GetContentDownloadUrl = server.GetContentDownloadUrl(
    {
        Key: key,
        HttpMethod: httpMethod,
        ThruCDN: thruCDN
    });
    return(GetContentDownloadUrl);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Friend List Management
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Adds the Friend user to the friendlist of the user with PlayFabId. At least one of FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
 * @param {string} playFabId
 * *REQUIRED* PlayFab identifier of the player to add a new friend.
 * @param {string} friendEmail
 * Email address of the user being added.
 * @param {string} friendPlayFabId
 * The PlayFab identifier of the user being added.
 * @param {string} friendTitleDisplayName
 * Title-specific display name of the user to being added.
 * @param {string} friendUsername
 * The PlayFab username of the user being added
 */
function AddFriend(playFabId, friendEmail, friendPlayFabId, friendTitleDisplayName, friendUsername)
{
    var AddFriend = server.AddFriend(
    {
        PlayFabId: playFabId,
        FriendEmail: friendEmail,
        FriendPlayFabId: friendPlayFabId,
        FriendTitleDisplayName: friendTitleDisplayName,
        FriendUsername: friendUsername
    });
    return(AddFriend);
}
/**
 * Retrieves the current friends for the user with PlayFabId, constrained to users who have PlayFab accounts. Friends from linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
 * @param {string} playFabId
 * *REQUIRED* PlayFab identifier of the player whose friend list to get.
 * @param {ExternalFriendSources} externalPlatformFriends
 * Indicates which other platforms' friends should be included in the response. In HTTP, it is represented as a comma-separated list of platforms.
 * @param {PlayerProfileViewConstraints} profileConstraints
 * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section.
 * @param {string} xboxToken
 * Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab.
 */
function GetFriendsList(playFabId, externalPlatformFriends, profileConstraints, xboxToken)
{
    var GetFriendsList = server.GetFriendsList(
    {
        PlayFabId: playFabId,
        ExternalPlatformFriends: externalPlatformFriends,
        ProfileConstraints: profileConstraints,
        XboxToken: xboxToken
    });
    return(GetFriendsList);
}
/**
 * Removes the specified friend from the the user's friend list
 * @param {string} friendPlayFabId
 * *REQUIRED* PlayFab identifier of the friend account which is to be removed.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function RemoveFriend(friendPlayFabId, playFabId)
{
    var RemoveFriend = server.RemoveFriend(
    {
        FriendPlayFabId: friendPlayFabId,
        PlayFabId: playFabId
    });
    return(RemoveFriend);
}
/**
 * Updates the tag list for a specified user in the friend list of another user
 * @param {string} friendPlayFabId
 * *REQUIRED* PlayFab identifier of the friend account to which the tag(s) should be applied.
 * @param {string} playFabId
 * *REQUIRED* PlayFab identifier of the player whose friend is to be updated.
 * @param {string[]} tags
 * *REQUIRED* Array of tags to set on the friend account.
 */
function SetFriendTags(friendPlayFabId, playFabId, tags)
{
    var SetFriendTags = server.SetFriendTags(
    {
        FriendPlayFabId: friendPlayFabId,
        PlayFabId: playFabId,
        Tags: tags
    });
    return(SetFriendTags);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Matchmaking
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Inform the matchmaker that a Game Server Instance is removed.
 * @param {string} lobbyId
 * *REQUIRED* Unique identifier for the Game Server Instance that is being deregistered.
 */
function DeregisterGame(lobbyId)
{
    var DeregisterGame = server.DeregisterGame(
    {
        LobbyId: lobbyId
    });
    return(DeregisterGame);
}
/**
 * Informs the PlayFab match-making service that the user specified has left the Game Server Instance
 * @param {string} lobbyId
 * *REQUIRED* Unique identifier of the Game Instance the user is leaving.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function NotifyMatchmakerPlayerLeft(lobbyId, playFabId)
{
    var NotifyMatchmakerPlayerLeft = server.NotifyMatchmakerPlayerLeft(
    {
        LobbyId: lobbyId,
        PlayFabId: playFabId
    });
    return(NotifyMatchmakerPlayerLeft);
}
/**
 * Validates a Game Server session ticket and returns details about the user
 * @param {string} lobbyId
 * *REQUIRED* Unique identifier of the Game Server Instance that is asking for validation of the authorization ticket.
 * @param {string} ticket
 * *REQUIRED* Server authorization ticket passed back from a call to Matchmake or StartGame.
 */
function RedeemMatchmakerTicket(lobbyId, ticket)
{
    var RedeemMatchmakerTicket = server.RedeemMatchmakerTicket(
    {
        LobbyId: lobbyId,
        Ticket: ticket
    });
    return(RedeemMatchmakerTicket);
}
/**
 * Set the state of the indicated Game Server Instance. Also update the heartbeat for the instance.
 * @param {string} lobbyId
 * *REQUIRED* Unique identifier of the Game Server Instance for which the heartbeat is updated.
 */
function RefreshGameServerInstanceHeartbeat(lobbyId)
{
    var RefreshGameServerInstanceHeartbeat = server.RefreshGameServerInstanceHeartbeat(
    {
        LobbyId: lobbyId
    });
    return(RefreshGameServerInstanceHeartbeat);
}
/**
 * Inform the matchmaker that a new Game Server Instance is added.
 * @param {string} build
 * *REQUIRED* Unique identifier of the build running on the Game Server Instance.
 * @param {string} gameMode
 * *REQUIRED* Game Mode the Game Server instance is running. Note that this must be defined in the Game Modes tab in the PlayFab Game Manager, along with the Build ID (the same Game Mode can be defined for multiple Build IDs).
 * @param {Region} region
 * *REQUIRED* Region in which the Game Server Instance is running. For matchmaking using non-AWS region names, set this to any AWS region and use Tags (below) to specify your custom region.
 * @param {string} serverPort
 * *REQUIRED* Port number for communication with the Game Server Instance.
 * @param {string} lobbyId
 * Previous lobby id if re-registering an existing game.
 * @param {string} serverIPV4Address
 * IPV4 address of the game server instance.
 * @param {string} serverIPV6Address
 * IPV6 address (if any) of the game server instance.
 * @param {string} serverPublicDNSName
 * Public DNS name (if any) of the server
 * @param {object} tags
 * Tags for the Game Server Instance
 */
function RegisterGame(build, gameMode, region, serverPort, lobbyId, serverIPV4Address, serverIPV6Address, serverPublicDNSName, tags)
{
    var RegisterGame = server.RegisterGame(
    {
        Build: build,
        GameMode: gameMode,
        Region: region,
        ServerPort: serverPort,
        LobbyId: lobbyId,
        ServerIPV4Address: serverIPV4Address,
        ServerIPV6Address: serverIPV6Address,
        ServerPublicDNSName: serverPublicDNSName,
        Tags: tags
    });
    return(RegisterGame);
}
/**
 * Sets the custom data of the indicated Game Server Instance
 * @param {string} gameServerData
 * *REQUIRED* Custom data to set for the specified game server instance.
 * @param {string} lobbyId
 * *REQUIRED* Unique identifier of the Game Instance to be updated, in decimal format.
 */
function SetGameServerInstanceData(gameServerData, lobbyId)
{
    var SetGameServerInstanceData = server.SetGameServerInstanceData(
    {
        GameServerData: gameServerData,
        LobbyId: lobbyId
    });
    return(SetGameServerInstanceData);
}
/**
 * Set the state of the indicated Game Server Instance.
 * @param {string} lobbyId
 * *REQUIRED* Unique identifier of the Game Instance to be updated, in decimal format.
 * @param {GameInstanceState} state
 * *REQUIRED* State to set for the specified game server instance.
 */
function SetGameServerInstanceState(lobbyId, state)
{
    var SetGameServerInstanceState = server.SetGameServerInstanceState(
    {
        LobbyId: lobbyId,
        State: state
    });
    return(SetGameServerInstanceState);
}
/**
 * Set custom tags for the specified Game Server Instance
 * @param {string} lobbyId
 * *REQUIRED* Unique identifier of the Game Server Instance to be updated.
 * @param {object} tags
 * *REQUIRED* Tags to set for the specified Game Server Instance. Note that this is the complete list of tags to be associated with the Game Server Instance.
 */
function SetGameServerInstanceTags(lobbyId, tags)
{
    var SetGameServerInstanceTags = server.SetGameServerInstanceTags(
    {
        LobbyId: lobbyId,
        Tags: tags
    });
    return(SetGameServerInstanceTags);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Platform Specific Methods
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Awards the specified users the specified Steam achievements
 * @param {AwardSteamAchievementItem[]} achievements
 * *REQUIRED* Array of achievements to grant and the users to whom they are to be granted.
 */
function AwardSteamAchievement(achievements)
{
    var AwardSteamAchievement = server.AwardSteamAchievement(
    {
        Achievements: achievements
    });
    return(AwardSteamAchievement);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Play Stream
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {string} tagName
 * *REQUIRED* Unique tag for player profile.
 */
function AddPlayerTag(playFabId, tagName)
{
    var AddPlayerTag = server.AddPlayerTag(
    {
        PlayFabId: playFabId,
        TagName: tagName
    });
    return(AddPlayerTag);
}
/**
 * Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
 */
function GetAllSegments()
{
    var GetAllSegments = server.GetAllSegments({});
    return(GetAllSegments);
}
/**
 * List all segments that a player currently belongs to at this moment in time.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 */
function GetPlayerSegments(playFabId)
{
    var GetPlayerSegments = server.GetPlayerSegments(
    {
        PlayFabId: playFabId
    });
    return(GetPlayerSegments);
}
/**
 * Get all tags with a given Namespace (optional) from a player profile.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {string} namespace
 * Optional namespace to filter results by
 */
function GetPlayerTags(playFabId, namespace)
{
    var GetPlayerTags = server.GetPlayerTags(
    {
        PlayFabId: playFabId,
        Namespace: namespace
    });
    return(GetPlayerTags);
}
/**
 * Allows for paging through all players in a given segment. This API creates a snapshot of all player profiles that match the segment definition at the time of its creation and lives through the Total Seconds to Live, refreshing its life span on each subsequent use of the Continuation Token. Profiles that change during the course of paging will not be reflected in the results. AB Test segments are currently not supported by this operation. NOTE: This API is limited to being called 30 times in one minute. You will be returned an error if you exceed this threshold.
 * @param {string} segmentId
 * *REQUIRED* Unique identifier for this segment.
 * @param {string} continuationToken
 * Continuation token if retrieving subsequent pages of results.
 * @param {boolean} getProfilesAsync
 * If set to true, the profiles are loaded asynchronously and the response will include a continuation token and approximate profile count until the first batch of profiles is loaded. Use this parameter to help avoid network timeouts.
 * @param {number} maxBatchSize
 * Maximum is 10,000. The value 0 will prevent loading any profiles and return only the count of profiles matching this segment.
 * @param {number} secondsToLive
 * Number of seconds to keep the continuation token active. After token expiration it is not possible to continue paging results. Default is 300 (5 minutes). Maximum is 1,800 (30 minutes).
 */
function GetPlayersInSegment(segmentId, continuationToken, getProfilesAsync, maxBatchSize, secondsToLive)
{
    var GetPlayersInSegment = server.GetPlayersInSegment(
    {
        SegmentId: segmentId,
        ContinuationToken: continuationToken,
        GetProfilesAsync: getProfilesAsync,
        MaxBatchSize: maxBatchSize,
        SecondsToLive: secondsToLive
    });
    return(GetPlayersInSegment);
}
/**
 * Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {string} tagName
 * *REQUIRED* Unique tag for player profile.
 */
function RemovePlayerTag(playFabId, tagName)
{
    var RemovePlayerTag = server.RemovePlayerTag(
    {
        PlayFabId: playFabId,
        TagName: tagName
    });
    return(RemovePlayerTag);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Player Data Management
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Retrieves a list of ranked friends of the given player for the given statistic, starting from the indicated point in the leaderboard
 * @param {number} maxResultsCount
 * *REQUIRED* Maximum number of entries to retrieve.
 * @param {string} playFabId
 * *REQUIRED* The player whose friend leaderboard to get
 * @param {number} startPosition
 * *REQUIRED* Position in the leaderboard to start this listing (defaults to the first entry).
 * @param {string} statisticName
 * *REQUIRED* Statistic used to rank friends for this leaderboard.
 * @param {ExternalFriendSources} externalPlatformFriends
 * Indicates which other platforms' friends should be included in the response. In HTTP, it is represented as a comma-separated list of platforms.
 * @param {PlayerProfileViewConstraints} profileConstraints
 * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section.
 * @param {boolean} useSpecificVersion
 * If set to false, Version is considered null. If true, uses the specified Version
 * @param {number} version
 * The version of the leaderboard to get.
 * @param {string} xboxToken
 * Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab.
 */
function GetFriendLeaderboard(maxResultsCount, playFabId, startPosition, statisticName, externalPlatformFriends, profileConstraints, useSpecificVersion, version, xboxToken)
{
    var GetFriendLeaderboard = server.GetFriendLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: playFabId,
        StartPosition: startPosition,
        StatisticName: statisticName,
        ExternalPlatformFriends: externalPlatformFriends,
        ProfileConstraints: profileConstraints,
        UseSpecificVersion: useSpecificVersion,
        Version: version,
        XboxToken: xboxToken
    });
    return(GetFriendLeaderboard);
}
/**
 * Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
 * @param {number} maxResultsCount
 * *REQUIRED* Maximum number of entries to retrieve.
 * @param {number} startPosition
 * *REQUIRED* First entry in the leaderboard to be retrieved.
 * @param {string} statisticName
 * *REQUIRED* Unique identifier for the title-specific statistic for the leaderboard.
 * @param {PlayerProfileViewConstraints} profileConstraints
 * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section.
 * @param {boolean} useSpecificVersion
 * If set to false, Version is considered null. If true, uses the specified Version
 * @param {number} version
 * The version of the leaderboard to get.
 */
function GetLeaderboard(maxResultsCount, startPosition, statisticName, profileConstraints, useSpecificVersion, version)
{
    var GetLeaderboard = server.GetLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        StartPosition: startPosition,
        StatisticName: statisticName,
        ProfileConstraints: profileConstraints,
        UseSpecificVersion: useSpecificVersion,
        Version: version
    });
    return(GetLeaderboard);
}
/**
 * Retrieves a list of ranked users for the given statistic, centered on the currently signed-in user
 * @param {number} maxResultsCount
 * *REQUIRED* Maximum number of entries to retrieve.
 * @param {string} playFabId
 * *REQUIRED* Unique PlayFab assigned ID of the user on whom the operation will be performed.
 * @param {string} statisticName
 * *REQUIRED* Unique identifier for the title-specific statistic for the leaderboard.
 * @param {PlayerProfileViewConstraints} profileConstraints
 * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section.
 * @param {boolean} useSpecificVersion
 * If set to false, Version is considered null. If true, uses the specified Version
 * @param {number} version
 * The version of the leaderboard to get.
 */
function GetLeaderboardAroundUser(maxResultsCount, playFabId, statisticName, profileConstraints, useSpecificVersion, version)
{
    var GetLeaderboardAroundUser = server.GetLeaderboardAroundUser(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: playFabId,
        StatisticName: statisticName,
        ProfileConstraints: profileConstraints,
        UseSpecificVersion: useSpecificVersion,
        Version: version
    });
    return(GetLeaderboardAroundUser);
}
/**
 * Returns whatever info is requested in the response for the user. Note that PII (like email address, facebook id) may be returned. All parameters default to false.
 * @param {GetPlayerCombinedInfoRequestParams} infoRequestParameters
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 */
function GetPlayerCombinedInfo(infoRequestParameters, playFabId)
{
    var GetPlayerCombinedInfo = server.GetPlayerCombinedInfo(
    {
        InfoRequestParameters: infoRequestParameters,
        PlayFabId: playFabId
    });
    return(GetPlayerCombinedInfo);
}
/**
 * Retrieves the information on the available versions of the specified statistic.
 * @param {string} statisticName
 * unique name of the statistic
 */
function GetPlayerStatisticVersions(statisticName)
{
    var GetPlayerStatisticVersions = server.GetPlayerStatisticVersions(
    {
        StatisticName: statisticName
    });
    return(GetPlayerStatisticVersions);
}
/**
 * Retrieves the current version and values for the indicated statistics, for the local player.
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {StatisticNameVersion[]} statisticNameVersions
 * 
 * @param {string[]} statisticNames
 * 
 */
function GetPlayerStatistics(playFabId, statisticNameVersions, statisticNames)
{
    var GetPlayerStatistics = server.GetPlayerStatistics(
    {
        PlayFabId: playFabId,
        StatisticNameVersions: statisticNameVersions,
        StatisticNames: statisticNames
    });
    return(GetPlayerStatistics);
}
/**
 * Retrieves the title-specific custom data for the user which is readable and writable by the client
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {number} ifChangedFromDataVersion
 * 
 * @param {string[]} keys
 * 
 */
function GetUserData(playFabId, ifChangedFromDataVersion, keys)
{
    var GetUserData = server.GetUserData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserData);
}
/**
 * Retrieves the title-specific custom data for the user which cannot be accessed by the client
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {number} ifChangedFromDataVersion
 * 
 * @param {string[]} keys
 * 
 */
function GetUserInternalData(playFabId, ifChangedFromDataVersion, keys)
{
    var GetUserInternalData = server.GetUserInternalData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserInternalData);
}
/**
 * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {number} ifChangedFromDataVersion
 * 
 * @param {string[]} keys
 * 
 */
function GetUserPublisherData(playFabId, ifChangedFromDataVersion, keys)
{
    var GetUserPublisherData = server.GetUserPublisherData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserPublisherData);
}
/**
 * Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {number} ifChangedFromDataVersion
 * 
 * @param {string[]} keys
 * 
 */
function GetUserPublisherInternalData(playFabId, ifChangedFromDataVersion, keys)
{
    var GetUserPublisherInternalData = server.GetUserPublisherInternalData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserPublisherInternalData);
}
/**
 * Retrieves the publisher-specific custom data for the user which can only be read by the client
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {number} ifChangedFromDataVersion
 * 
 * @param {string[]} keys
 * 
 */
function GetUserPublisherReadOnlyData(playFabId, ifChangedFromDataVersion, keys)
{
    var GetUserPublisherReadOnlyData = server.GetUserPublisherReadOnlyData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserPublisherReadOnlyData);
}
/**
 * Retrieves the title-specific custom data for the user which can only be read by the client
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {number} ifChangedFromDataVersion
 * 
 * @param {string[]} keys
 * 
 */
function GetUserReadOnlyData(playFabId, ifChangedFromDataVersion, keys)
{
    var GetUserReadOnlyData = server.GetUserReadOnlyData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserReadOnlyData);
}
/**
 * Updates the values of the specified title-specific statistics for the user
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {StatisticUpdate[]} statistics
 * *REQUIRED* 
 * @param {boolean} forceUpdate
 * 
 */
function UpdatePlayerStatistics(playFabId, statistics, forceUpdate)
{
    var UpdatePlayerStatistics = server.UpdatePlayerStatistics(
    {
        PlayFabId: playFabId,
        Statistics: statistics,
        ForceUpdate: forceUpdate
    });
    return(UpdatePlayerStatistics);
}
/**
 * Updates the title-specific custom data for the user which is readable and writable by the client
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {object} data
 * 
 * @param {string[]} keysToRemove
 * 
 * @param {UserDataPermission} permission
 * 
 */
function UpdateUserData(playFabId, data, keysToRemove, permission)
{
    var UpdateUserData = server.UpdateUserData(
    {
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateUserData);
}
/**
 * Updates the title-specific custom data for the user which cannot be accessed by the client
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {object} data
 * 
 * @param {string[]} keysToRemove
 * 
 */
function UpdateUserInternalData(playFabId, data, keysToRemove)
{
    var UpdateUserInternalData = server.UpdateUserInternalData(
    {
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserInternalData);
}
/**
 * Updates the publisher-specific custom data for the user which is readable and writable by the client
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {object} data
 * 
 * @param {string[]} keysToRemove
 * 
 * @param {UserDataPermission} permission
 * 
 */
function UpdateUserPublisherData(playFabId, data, keysToRemove, permission)
{
    var UpdateUserPublisherData = server.UpdateUserPublisherData(
    {
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateUserPublisherData);
}
/**
 * Updates the publisher-specific custom data for the user which cannot be accessed by the client
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {object} data
 * 
 * @param {string[]} keysToRemove
 * 
 */
function UpdateUserPublisherInternalData(playFabId, data, keysToRemove)
{
    var UpdateUserPublisherInternalData = server.UpdateUserPublisherInternalData(
    {
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserPublisherInternalData);
}
/**
 * Updates the publisher-specific custom data for the user which can only be read by the client
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {object} data
 * 
 * @param {string[]} keysToRemove
 * 
 * @param {UserDataPermission} permission
 * 
 */
function UpdateUserPublisherReadOnlyData(playFabId, data, keysToRemove, permission)
{
    var UpdateUserPublisherReadOnlyData = server.UpdateUserPublisherReadOnlyData(
    {
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateUserPublisherReadOnlyData);
}
/**
 * Updates the title-specific custom data for the user which can only be read by the client
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {object} data
 * 
 * @param {string[]} keysToRemove
 * 
 * @param {UserDataPermission} permission
 * 
 */
function UpdateUserReadOnlyData(playFabId, data, keysToRemove, permission)
{
    var UpdateUserReadOnlyData = server.UpdateUserReadOnlyData(
    {
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateUserReadOnlyData);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Player Item Management
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Increments the character's balance of the specified virtual currency by the stated amount
 * @param {number} amount
 * *REQUIRED* 
 * @param {string} characterId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} virtualCurrency
 * *REQUIRED* 
 */
function AddCharacterVirtualCurrency(amount, characterId, playFabId, virtualCurrency)
{
    var AddCharacterVirtualCurrency = server.AddCharacterVirtualCurrency(
    {
        Amount: amount,
        CharacterId: characterId,
        PlayFabId: playFabId,
        VirtualCurrency: virtualCurrency
    });
    return(AddCharacterVirtualCurrency);
}
/**
 * Increments the user's balance of the specified virtual currency by the stated amount
 * @param {number} amount
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} virtualCurrency
 * *REQUIRED* 
 */
function AddUserVirtualCurrency(amount, playFabId, virtualCurrency)
{
    var AddUserVirtualCurrency = server.AddUserVirtualCurrency(
    {
        Amount: amount,
        PlayFabId: currentPlayerId,
        VirtualCurrency: virtualCurrency
    });
    return(AddUserVirtualCurrency);
}
/**
 * Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's inventory.
 * @param {number} consumeCount
 * *REQUIRED* 
 * @param {string} itemInstanceId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} characterId
 * 
 */
function ConsumeItem(consumeCount, itemInstanceId, playFabId, characterId)
{
    var ConsumeItem = server.ConsumeItem(
    {
        ConsumeCount: consumeCount,
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId,
        CharacterId: characterId
    });
    return(ConsumeItem);
}
/**
 * Returns the result of an evaluation of a Random Result Table - the ItemId from the game Catalog which would have been added to the player inventory, if the Random Result Table were added via a Bundle or a call to UnlockContainer.
 * @param {string} tableId
 * *REQUIRED* 
 * @param {string} catalogVersion
 * 
 */
function EvaluateRandomResultTable(tableId, catalogVersion)
{
    var EvaluateRandomResultTable = server.EvaluateRandomResultTable(
    {
        TableId: tableId,
        CatalogVersion: catalogVersion
    });
    return(EvaluateRandomResultTable);
}
/**
 * Retrieves the specified character's current inventory of virtual goods
 * @param {string} characterId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} catalogVersion
 * 
 */
function GetCharacterInventory(characterId, playFabId, catalogVersion)
{
    var GetCharacterInventory = server.GetCharacterInventory(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        CatalogVersion: catalogVersion
    });
    return(GetCharacterInventory);
}
/**
 * Retrieves the configuration information for the specified random results tables for the title, including all ItemId values and weights
 * @param {string[]} tableIDs
 * *REQUIRED* 
 * @param {string} catalogVersion
 * 
 */
function GetRandomResultTables(tableIDs, catalogVersion)
{
    var GetRandomResultTables = server.GetRandomResultTables(
    {
        TableIDs: tableIDs,
        CatalogVersion: catalogVersion
    });
    return(GetRandomResultTables);
}
/**
 * Retrieves the specified user's current inventory of virtual goods
 * @param {string} playFabId
 * *REQUIRED* 
 */
function GetUserInventory(playFabId)
{
	var GetUserInventory = server.GetUserInventory(
	{
		PlayFabId: playFabId
	});
	return(GetUserInventory);
}
/**
 * Adds the specified items to the specified character's inventory
 * @param {string} characterId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} annotation
 * 
 * @param {string} catalogVersion
 * 
 * @param {string[]} itemIds
 * 
 */
function GrantItemsToCharacter(characterId, playFabId, annotation, catalogVersion, itemIds)
{
	var GrantItemsToCharacter = server.GrantItemsToCharacter(
	{
		CharacterId: characterId,
		PlayFabId: playFabId,
		Annotation: annotation,
		CatalogVersion: catalogVersion,
		ItemIds: itemIds
	});
	return(GrantItemsToCharacter);
}
/**
 * Adds the specified items to the specified user's inventory
 * @param {string[]} itemIds
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} annotation
 * 
 * @param {string} catalogVersion
 * 
 */
function GrantItemsToUser(itemIds, playFabId, annotation, catalogVersion)
{
    var GrantItemsToUser = server.GrantItemsToUser(
    {
        ItemIds: itemIds,
        PlayFabId: playFabId,
        Annotation: annotation,
        CatalogVersion: catalogVersion
    });
    return(GrantItemsToUser);
}
/**
 * Adds the specified items to the specified user inventories
 * @param {ItemGrant[]} itemGrants
 * *REQUIRED* 
 * @param {string} catalogVersion
 * 
 */
function GrantItemsToUsers(itemGrants, catalogVersion)
{
    var GrantItemsToUsers = server.GrantItemsToUsers(
    {
        ItemGrants: itemGrants,
        CatalogVersion: catalogVersion
    });
    return(GrantItemsToUsers);
}
/**
 * Modifies the number of remaining uses of a player's inventory item
 * @param {string} itemInstanceId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {number} usesToAdd
 * *REQUIRED* 
 */
function ModifyItemUses(itemInstanceId, playFabId, usesToAdd)
{
    var ModifyItemUses = server.ModifyItemUses(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId,
        UsesToAdd: usesToAdd
    });
    return(ModifyItemUses);
}
/**
 * Moves an item from a character's inventory into another of the users's character's inventory.
 * @param {string} givingCharacterId
 * *REQUIRED* 
 * @param {string} itemInstanceId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} receivingCharacterId
 * *REQUIRED* 
 */
function MoveItemToCharacterFromCharacter(givingCharacterId, itemInstanceId, playFabId, receivingCharacterId)
{
    var MoveItemToCharacterFromCharacter = server.MoveItemToCharacterFromCharacter(
    {
        GivingCharacterId: givingCharacterId,
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId,
        ReceivingCharacterId: receivingCharacterId
    });
    return(MoveItemToCharacterFromCharacter);
}
/**
 * Moves an item from a user's inventory into their character's inventory.
 * @param {string} characterId
 * *REQUIRED* 
 * @param {string} itemInstanceId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 */
function MoveItemToCharacterFromUser(characterId, itemInstanceId, playFabId)
{
    var MoveItemToCharacterFromUser = server.MoveItemToCharacterFromUser(
    {
        CharacterId: characterId,
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId
    });
    return(MoveItemToCharacterFromUser);
}
/**
 * Moves an item from a character's inventory into the owning user's inventory.
 * @param {string} characterId
 * *REQUIRED* 
 * @param {string} itemInstanceId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 */
function MoveItemToUserFromCharacter(characterId, itemInstanceId, playFabId)
{
    var MoveItemToUserFromCharacter = server.MoveItemToUserFromCharacter(
    {
        CharacterId: characterId,
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId
    });
    return(MoveItemToUserFromCharacter);
}
/**
 * Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the Economy->Catalogs tab in the PlayFab Game Manager.
 * @param {string} couponCode
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} catalogVersion
 * 
 * @param {string} characterId
 * 
 */
function RedeemCoupon(couponCode, playFabId, catalogVersion, characterId)
{
    var RedeemCoupon = server.RedeemCoupon(
    {
        CouponCode: couponCode,
        PlayFabId: playFabId,
        CatalogVersion: catalogVersion,
        CharacterId: characterId
    });
    return(RedeemCoupon);
}
/**
 * Submit a report about a player (due to bad bahavior, etc.) on behalf of another player, so that customer service representatives for the title can take action concerning potentially toxic players.
 * @param {string} reporteeId
 * *REQUIRED* 
 * @param {string} reporterId
 * *REQUIRED* 
 * @param {string} comment
 * 
 */
function ReportPlayer(reporteeId, reporterId, comment)
{
    var ReportPlayer = server.ReportPlayer(
    {
        ReporteeId: reporteeId,
        ReporterId: reporterId,
        Comment: comment
    });
    return(ReportPlayer);
}
/**
 * Revokes access to an item in a user's inventory
 * @param {string} itemInstanceId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} characterId
 * 
 */
function RevokeInventoryItem(itemInstanceId, playFabId, characterId)
{
    var RevokeInventoryItem = server.RevokeInventoryItem(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId,
        CharacterId: characterId
    });
    return(RevokeInventoryItem);
}
/**
 * Revokes access for up to 25 items across multiple users and characters.
 * @param {RevokeInventoryItem[]} items
 * *REQUIRED* 
 */
function RevokeInventoryItems(items)
{
    var RevokeInventoryItems = server.RevokeInventoryItems(
    {
        Items: items
    });
    return(RevokeInventoryItems);
}
/**
 * Decrements the character's balance of the specified virtual currency by the stated amount. It is possible to make a VC balance negative with this API.
 * @param {number} amount
 * *REQUIRED* 
 * @param {string} characterId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} virtualCurrency
 * *REQUIRED* 
 */
function SubtractCharacterVirtualCurrency(amount, characterId, playFabId, virtualCurrency)
{
    var SubtractCharacterVirtualCurrency = server.SubtractCharacterVirtualCurrency(
    {
        Amount: amount,
        CharacterId: characterId,
        PlayFabId: playFabId,
        VirtualCurrency: virtualCurrency
    });
    return(SubtractCharacterVirtualCurrency);
}
/**
 * Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make a VC balance negative with this API.
 * @param {number} amount
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} virtualCurrency
 * *REQUIRED* 
 */
function SubtractUserVirtualCurrency(amount, playFabId, virtualCurrency)
{
    var SubtractUserVirtualCurrency = server.SubtractUserVirtualCurrency(
    {
        Amount: amount,
        PlayFabId: playFabId,
        VirtualCurrency: virtualCurrency
    });
    return(SubtractUserVirtualCurrency);
}
/**
 * Opens a specific container (ContainerItemInstanceId), with a specific key (KeyItemInstanceId, when required), and returns the contents of the opened container. If the container (and key when relevant) are consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
 * @param {string} containerItemInstanceId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} catalogVersion
 * 
 * @param {string} characterId
 * 
 * @param {string} keyItemInstanceId
 * 
 */
function UnlockContainerInstance(containerItemInstanceId, playFabId, catalogVersion, characterId, keyItemInstanceId)
{
    var UnlockContainerInstance = server.UnlockContainerInstance(
    {
        ContainerItemInstanceId: containerItemInstanceId,
        PlayFabId: playFabId,
        CatalogVersion: catalogVersion,
        CharacterId: characterId,
        KeyItemInstanceId: keyItemInstanceId
    });
    return(UnlockContainerInstance);
}
/**
 * Searches Player or Character inventory for any ItemInstance matching the given CatalogItemId, if necessary unlocks it using any appropriate key, and returns the contents of the opened container. If the container (and key when relevant) are consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
 * @param {string} containerItemId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} catalogVersion
 * 
 * @param {string} characterId
 * 
 */
function UnlockContainerItem(containerItemId, playFabId, catalogVersion, characterId)
{
    var UnlockContainerItem = server.UnlockContainerItem(
    {
        ContainerItemId: containerItemId,
        PlayFabId: playFabId,
        CatalogVersion: catalogVersion,
        CharacterId: characterId
    });
    return(UnlockContainerItem);
}
/**
 * Updates the key-value pair data tagged to the specified item, which is read-only from the client.
 * @param {string} itemInstanceId
 * *REQUIRED* 
 * @param {string} playFabId
 * *REQUIRED* 
 * @param {string} characterId
 * 
 * @param {object} data
 * 
 * @param {string[]} keysToRemove
 * 
 */
function UpdateUserInventoryItemCustomData(itemInstanceId, playFabId, characterId, data, keysToRemove)
{
    var UpdateUserInventoryItemCustomData = server.UpdateUserInventoryItemCustomData(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId,
        CharacterId: characterId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserInventoryItemCustomData);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Server-Side Cloud Script
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Executes a CloudScript function, with the 'currentPlayerId' set to the PlayFab ID of the authenticated player. The PlayFab ID is the entity ID of the player's master_player_account entity.
 * @param {string} functionName
 * 
 * @param {string} playFabId
 * 
 * @param {object} functionParameter
 * 
 * @param {boolean} generatePlayStreamEvent
 * 
 * @param {CloudScriptRevisionOption} revisionSelection
 * 
 * @param {number} specificRevision
 * 
 */
function ExecuteCloudScript(functionName, playFabId, functionParameter, generatePlayStreamEvent, revisionSelection, specificRevision)
{
    var ExecuteCloudScript = server.ExecuteCloudScript(
    {
        FunctionName: functionName,
        PlayFabId: playFabId,
        FunctionParameter: functionParameter,
        GeneratePlayStreamEvent: generatePlayStreamEvent,
        RevisionSelection: revisionSelection,
        SpecificRevision: specificRevision
    });
    return(ExecuteCloudScript);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Shared Group Data
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users in the group (and the server) can add new members. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {string[]} playFabIds
 * 
 * @param {string} sharedGroupId
 * 
*/
function AddSharedGroupMembers(playFabIds, sharedGroupId)
{
    var AddSharedGroupMembers = server.AddSharedGroupMembers(
    {
        PlayFabIds: playFabIds,
        SharedGroupId: sharedGroupId
    });
    return(AddSharedGroupMembers);
}
/**
 * Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the group. When created by a server, the group will initially have no members. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {string} sharedGroupId
 * 
 */
function CreateSharedGroup(sharedGroupId)
{
    var CreateSharedGroup = server.CreateSharedGroup(
    {
        SharedGroupId: sharedGroupId
    });
    return(CreateSharedGroup);
}
/**
 * Deletes a shared group, freeing up the shared group ID to be reused for a new group. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {string} sharedGroupId
 * 
 */
function DeleteSharedGroup(sharedGroupId)
{
    var DeleteSharedGroup = server.DeleteSharedGroup(
    {
        SharedGroupId: sharedGroupId
    });
    return(DeleteSharedGroup);
}
/**
 * Retrieves data stored in a shared group object, as well as the list of members in the group. The server can access all public and private group data. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {string} sharedGroupId
 * 
 * @param {boolean} getMembers
 * 
 * @param {string[]} keys
 * 
 */
function GetSharedGroupData(sharedGroupId, getMembers, keys)
{
    var GetSharedGroupData = server.GetSharedGroupData(
    {
        SharedGroupId: sharedGroupId,
        GetMembers: getMembers,
        Keys: keys
    });
    return(GetSharedGroupData);
}
/**
 * Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the group can remove members. If as a result of the call, zero users remain with access, the group and its associated data will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {string[]} playFabIds
 * 
 * @param {string} sharedGroupId
 * 
 */
function RemoveSharedGroupMembers(playFabIds, sharedGroupId)
{
    var RemoveSharedGroupMembers = server.RemoveSharedGroupMembers(
    {
        PlayFabIds: playFabIds,
        SharedGroupId: sharedGroupId
    });
    return(RemoveSharedGroupMembers);
}
/**
 * Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated or added in this call will be readable by users not in the group. By default, data permissions are set to Private. Regardless of the permission setting, only members of the group (and the server) can update the data. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {string} sharedGroupId
 * Unique identifier for the shared group.
 * @param {object} data
 * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may not begin with a '!' character or be null.
 * @param {string[]} keysToRemove
 * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language constraints. Use this to delete the keys directly.
 * @param {UserDataPermission} permission
 * Permission to be applied to all user data keys in this request. https://learn.microsoft.com/en-us/rest/api/playfab/server/shared-group-data/update-shared-group-data?view=playfab-rest#userdatapermission
 */
function UpdateSharedGroupData(sharedGroupId, data, keysToRemove, permission)
{
    var UpdateSharedGroupData = server.UpdateSharedGroupData(
    {
        SharedGroupId: sharedGroupId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateSharedGroupData);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Title-Wide Data Management
//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
 * @param {string} catalogVersion
 * 
 */
function GetCatalogItems(catalogVersion)
{
    var GetCatalogItems = server.GetCatalogItems(
    {
        CatalogVersion: catalogVersion
    });
    return(GetCatalogItems);
}
/**
 * Retrieves the key-value store of custom publisher settings
 * @param {string[]} keys
 * 
 */
function GetPublisherData(keys)
{
    var GetPublisherData = server.GetPublisherData(
    {
        Keys: keys
    });
    return(GetPublisherData);
}
/**
 * Retrieves the set of items defined for the specified store, including all prices defined, for the specified player
 * @param {string} storeId
 * *REQUIRED* Unique identifier for the store which is being requested.
 * @param {string} catalogVersion
 * Catalog version to store items from. Use default catalog version if null.
 * @param {string} playFabId
 * Optional identifier for the player to use in requesting the store information - if used, segment overrides will be applied.
 */
function GetStoreItems(storeId, catalogVersion, playFabId)
{
    var GetStoreItems = server.GetStoreItems(
    {
        StoreId: storeId,
        CatalogVersion: catalogVersion,
        PlayFabId: playFabId
    });
    return(GetStoreItems);
}
/**
 * Retrieves the current server time. Time is always returned as Coordinated Universal Time (UTC). Please note that due to clock drift between servers, there is a potential variance of up to 5 seconds.
 */
function GetTime()
{
    var GetTime = server.GetTime(
    {
    });
    return(GetTime);
}
/**
 * Retrieves the key-value store of custom title settings
 * @param {string[]} keys
 * Specific keys to search for in the title data (leave null to get all keys)
 * @param {string} overrideLabel
 * Optional field that specifies the name of an override. This value is ignored when used by the game client; otherwise, the overrides are applied automatically to the title data.
 */
function GetTitleData(keys, overrideLabel)
{
    var GetTitleData = server.GetTitleData(
    {
        Keys: keys,
        OverrideLabel: overrideLabel
    });
    return(GetTitleData);
}
/**
 * Retrieves the key-value store of custom internal title settings
 * @param {string[]} keys
 * Specific keys to search for in the title data (leave null to get all keys).
 * @param {string} overrideLabel
 * Optional field that specifies the name of an override. This value is ignored when used by the game client; otherwise, the overrides are applied automatically to the title data.
 */
function GetTitleInternalData(keys, overrideLabel)
{
    var GetTitleInternalData = server.GetTitleInternalData(
    {
        Keys: keys,
        OverrideLabel: overrideLabel
    });
    return(GetTitleInternalData);
}
/**
 * Retrieves the title news feed, as configured in the developer portal
 * @param {number} count
 * Limits the results to the last n entries. Defaults to 10 if not set.
 */
function GetTitleNews(count)
{
    var GetTitleNews = server.GetTitleNews(
    {
        Count: count
    });
    return(GetTitleNews);
}
/**
 * Updates the key-value store of custom publisher settings
 * @param {string} key
 * *REQUIRED* key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
 * @param {string} value
 * new value to set. Set to null to remove a value
 */
function SetPublisherData(key, value)
{
    var SetPublisherData = server.SetPublisherData(
    {
        Key: key,
        Value: value
    });
    return(SetPublisherData);
}
/**
 * Updates the key-value store of custom title settings
 * @param {string} key
 * *REQUIRED* key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
 * @param {string} value
 * new value to set. Set to null to remove a value
 */
function SetTitleData(key, value)
{
    var SetTitleData = server.SetTitleData(
    {
        Key: key,
        Value: value
    });
    return(SetTitleData);
}
/**
 * Updates the key-value store of custom internal title settings
 * @param {string} key
 * *REQUIRED* key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
 * @param {string} value
 * new value to set. Set to null to remove a value
 */
function SetTitleInternalData(key, value)
{
    var SetTitleInternalData = server.SetTitleInternalData(
    {
        Key: key,
        Value: value
    });
    return(SetTitleInternalData);
}
//-------------------------------------------------------------------------------------------------------------------------------
//                                                                      END
//-------------------------------------------------------------------------------------------------------------------------------
