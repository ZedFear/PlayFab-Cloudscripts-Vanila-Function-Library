//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Account Management
//-------------------------------------------------------------------------------------------------------------------------------
function AddGenericID(genericId, playFabId)
{
    var AddGenericID = server.AddGenericID(
    {
        GenericId: genericId,
        PlayFabId: playFabId
    });
    return(AddGenericID);
}//genericId, playFabId
function BanUsers(bans)
{
    var BanUsers = server.BanUsers(
    {
        Bans: bans
    });
    return(BanUsers);
}//bans
function DeletePlayer(playFabId)
{
    var DeletePlayer = server.DeletePlayer(
    {
        PlayFabId: playFabId
    });
    return(DeletePlayer);
}//playFabId
function DeletePushNotificationTemplate(pushNotificationTemplateId)
{
    var DeletePushNotificationTemplate = server.DeletePushNotificationTemplate(
    {
        PushNotificationTemplateId: pushNotificationTemplateId
    });
    return(DeletePushNotificationTemplate);
}//pushNotificationTemplateId
function GetPlayFabIDsFromFacebookIDs(facebookIDs)
{
    var GetPlayFabIDsFromFacebookIDs = server.GetPlayFabIDsFromFacebookIDs(
    {
        FacebookIDs: facebookIDs
    });
    return(GetPlayFabIDsFromFacebookIDs);
}//facebookIDs
function GetPlayFabIDsFromFacebookInstantGamesIds(facebookInstantGamesIds)
{
    var GetPlayFabIDsFromFacebookInstantGamesIds = server.GetPlayFabIDsFromFacebookInstantGamesIds(
    {
        FacebookInstantGamesIds: facebookInstantGamesIds
    });
    return(GetPlayFabIDsFromFacebookInstantGamesIds);
}//facebookInstantGamesIds
function GetPlayFabIDsFromGenericIDs(genericIDs)
{
    var GetPlayFabIDsFromGenericIDs = server.GetPlayFabIDsFromGenericIDs(
    {
        GenericIDs: genericIDs
    });
    return(GetPlayFabIDsFromGenericIDs);
}//genericIDs
function GetPlayFabIDsFromNintendoServiceAccountIds(nintendoAccountIds)
{
    var GetPlayFabIDsFromNintendoServiceAccountIds = server.GetPlayFabIDsFromNintendoServiceAccountIds(
    {
        NintendoAccountIds: nintendoAccountIds
    });
    return(GetPlayFabIDsFromNintendoServiceAccountIds);
}//nintendoAccountIds
function GetPlayFabIDsFromNintendoSwitchDeviceIds(nintendoSwitchDeviceIds)
{
    var GetPlayFabIDsFromNintendoSwitchDeviceIds = server.GetPlayFabIDsFromNintendoSwitchDeviceIds(
    {
        NintendoSwitchDeviceIds: nintendoSwitchDeviceIds
    });
    return(GetPlayFabIDsFromNintendoSwitchDeviceIds);
}//nintendoSwitchDeviceIds
function GetPlayFabIDsFromPSNAccountIDs(psnAccountIDs)
{
    var GetPlayFabIDsFromPSNAccountIDs = server.GetPlayFabIDsFromPSNAccountIDs(
    {
        PSNAccountIDs: psnAccountIDs
    });
    return(GetPlayFabIDsFromPSNAccountIDs);
}//psnAccountIDs
function GetPlayFabIDsFromPSNAccountIDs(psnAccountIDs, issuerId)
{
    var GetPlayFabIDsFromPSNAccountIDs = server.GetPlayFabIDsFromPSNAccountIDs(
    {
        PSNAccountIDs: psnAccountIDs,
        IssuerId: issuerId
    });
    return(GetPlayFabIDsFromPSNAccountIDs);
}//psnAccountIDs, issuerId
function GetPlayFabIDsFromSteamIDs(steamStringIDs)
{
    var GetPlayFabIDsFromSteamIDs = server.GetPlayFabIDsFromSteamIDs(
    {
        SteamStringIDs: steamStringIDs
    });
    return(GetPlayFabIDsFromSteamIDs);
}//steamStringIDs
function GetPlayFabIDsFromTwitchIDs(twitchIds)
{
    var GetPlayFabIDsFromTwitchIDs = server.GetPlayFabIDsFromTwitchIDs(
    {
        TwitchIds: twitchIds
    });
    return(GetPlayFabIDsFromTwitchIDs);
}//twitchIds
function GetPlayFabIDsFromXboxLiveIDs(xboxLiveAccountIDs)
{
    var GetPlayFabIDsFromXboxLiveIDs = server.GetPlayFabIDsFromXboxLiveIDs(
    {
        XboxLiveAccountIDs: xboxLiveAccountIDs
    });
    return(GetPlayFabIDsFromXboxLiveIDs);
}//xboxLiveAccountIDs
function GetPlayFabIDsFromXboxLiveIDs(xboxLiveAccountIDs, sandbox)
{
    var GetPlayFabIDsFromXboxLiveIDs = server.GetPlayFabIDsFromXboxLiveIDs(
    {
        XboxLiveAccountIDs: xboxLiveAccountIDs,
        Sandbox: sandbox
    });
    return(GetPlayFabIDsFromXboxLiveIDs);
}//xboxLiveAccountIDs, sandbox
function GetPlayerProfile(playFabId)
{
    var GetPlayerProfile = server.GetPlayerProfile(
    {
        PlayFabId: playFabId
    });
    return(GetPlayerProfile);
}//playFabId
function GetPlayerProfile(playFabId, profileConstraints)
{
    var GetPlayerProfile = server.GetPlayerProfile(
    {
        PlayFabId: playFabId,
        ProfileConstraints: profileConstraints
    });
    return(GetPlayerProfile);
}//playFabId, profileConstraints
function GetServerCustomIDsFromPlayFabIDs(playFabIDs)
{
    var GetServerCustomIDsFromPlayFabIDs = server.GetServerCustomIDsFromPlayFabIDs(
    {
        PlayFabIDs: playFabIDs
    });
    return(GetServerCustomIDsFromPlayFabIDs);
}//playFabIDs
function GetUserAccountInfo(playFabId)
{
    var GetUserAccountInfo = server.GetUserAccountInfo(
    {
        PlayFabId: playFabId
    });
    return(GetUserAccountInfo);
}//playFabId
function GetUserBans(playFabId)
{
    var GetUserBans = server.GetUserBans(
    {
        PlayFabId: playFabId
    });
    return(GetUserBans);
}//playFabId
function LinkNintendoServiceAccount(identityToken, playFabId)
{
    var LinkNintendoServiceAccount = server.LinkNintendoServiceAccount(
    {
        IdentityToken: identityToken,
        PlayFabId: playFabId
    });
    return(LinkNintendoServiceAccount);
}//identityToken, playFabId
function LinkNintendoServiceAccount(identityToken, playFabId, forceLink)
{
    var LinkNintendoServiceAccount = server.LinkNintendoServiceAccount(
    {
        IdentityToken: identityToken,
        PlayFabId: playFabId,
        ForceLink: forceLink
    });
    return(LinkNintendoServiceAccount);
}//identityToken, playFabId, forceLink
function LinkNintendoSwitchDeviceId(nintendoSwitchDeviceId, playFabId)
{
    var LinkNintendoSwitchDeviceId = server.LinkNintendoSwitchDeviceId(
    {
        NintendoSwitchDeviceId: nintendoSwitchDeviceId,
        PlayFabId: playFabId
    });
    return(LinkNintendoSwitchDeviceId);
}//nintendoSwitchDeviceId, playFabId
function LinkNintendoSwitchDeviceId(nintendoSwitchDeviceId, playFabId, forceLink)
{
    var LinkNintendoSwitchDeviceId = server.LinkNintendoSwitchDeviceId(
    {
        NintendoSwitchDeviceId: nintendoSwitchDeviceId,
        PlayFabId: playFabId,
        ForceLink: forceLink
    });
    return(LinkNintendoSwitchDeviceId);
}//nintendoSwitchDeviceId, playFabId, forceLink
function LinkPSNAccount(authCode, playFabId, redirectUri)
{
    var LinkPSNAccount = server.LinkPSNAccount(
    {
        AuthCode: authCode,
        PlayFabId: playFabId,
        RedirectUri: redirectUri
    });
    return(LinkPSNAccount);
}//authCode, playFabId, redirectUri
function LinkPSNAccount(authCode, playFabId, redirectUri, forceLink)
{
    var LinkPSNAccount = server.LinkPSNAccount(
    {
        AuthCode: authCode,
        PlayFabId: playFabId,
        RedirectUri: redirectUri,
        ForceLink: forceLink
    });
    return(LinkPSNAccount);
}//authCode, playFabId, redirectUri, forceLink
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
}//authCode, playFabId, redirectUri, forceLink, issuerId
function LinkServerCustomId(playFabId, serverCustomId)
{
    var LinkServerCustomId = server.LinkServerCustomId(
    {
        PlayFabId: playFabId,
        ServerCustomId: serverCustomId
    });
    return(LinkServerCustomId);
}//playFabId, serverCustomId
function LinkServerCustomId(playFabId, serverCustomId, forceLink)
{
    var LinkServerCustomId = server.LinkServerCustomId(
    {
        PlayFabId: playFabId,
        ServerCustomId: serverCustomId,
        ForceLink: forceLink
    });
    return(LinkServerCustomId);
}//playFabId, serverCustomId, forceLink
function LinkXboxAccount(playFabId, xboxToken)
{
    var LinkXboxAccount = server.LinkXboxAccount(
    {
        PlayFabId: playFabId,
        XboxToken: xboxToken
    });
    return(LinkXboxAccount);
}//playFabId, xboxToken
function LinkXboxAccount(playFabId, xboxToken, forceLink)
{
    var LinkXboxAccount = server.LinkXboxAccount(
    {
        PlayFabId: playFabId,
        XboxToken: xboxToken,
        ForceLink: forceLink
    });
    return(LinkXboxAccount);
}//playFabId, xboxToken, forceLink
function RemoveGenericID(genericId, playFabId)
{
    var RemoveGenericID = server.RemoveGenericID(
    {
        PlayFabId: playFabId,
        GenericId: genericId
    });
    return(RemoveGenericID);
}//genericId, playFabId
function RevokeAllBansForUser(playFabId)
{
    var RevokeAllBansForUser = server.RevokeAllBansForUser(
    {
        PlayFabId: playFabId
    });
    return(RevokeAllBansForUser);
}//playFabId
function RevokeBans(banIds)
{
    var RevokeBans = server.RevokeBans(
    {
        BanIds: banIds
    });
    return(RevokeBans);
}//banIds
function SavePushNotificationTemplate(name)
{
    var SavePushNotificationTemplate = server.SavePushNotificationTemplate(
    {
        Name: name
    });
    return(SavePushNotificationTemplate);
}//name
function SavePushNotificationTemplate(name, androidPayload)
{
    var SavePushNotificationTemplate = server.SavePushNotificationTemplate(
    {
        Name: name,
        AndroidPayload: androidPayload
    });
    return(SavePushNotificationTemplate);
}//name, androidPayload
function SavePushNotificationTemplate(name, androidPayload, iosPayload)
{
    var SavePushNotificationTemplate = server.SavePushNotificationTemplate(
    {
        Name: name,
        AndroidPayload: androidPayload,
        IOSPayload: iosPayload
    });
    return(SavePushNotificationTemplate);
}//name, androidPayload, iosPayload
function SavePushNotificationTemplate(name, androidPayload, iosPayload, id)
{
    var SavePushNotificationTemplate = server.SavePushNotificationTemplate(
    {
        Name: name,
        AndroidPayload: androidPayload,
        IOSPayload: iosPayload,
        Id: id
    });
    return(SavePushNotificationTemplate);
}//name, androidPayload, iosPayload, id
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
}//name, androidPayload, iosPayload, id, localizedPushNotificationTemplates
function SendCustomAccountRecoveryEmail(emailTemplateId)
{
    var SendCustomAccountRecoveryEmail = server.SendCustomAccountRecoveryEmail(
    {
        EmailTemplateId: emailTemplateId
    });
    return(SendCustomAccountRecoveryEmail);
}//emailTemplateId
function SendCustomAccountRecoveryEmail(emailTemplateId, email)
{
    var SendCustomAccountRecoveryEmail = server.SendCustomAccountRecoveryEmail(
    {
        EmailTemplateId: emailTemplateId,
        Email: email
    });
    return(SendCustomAccountRecoveryEmail);
}//emailTemplateId, email
function SendCustomAccountRecoveryEmail(emailTemplateId, email, username)
{
    var SendCustomAccountRecoveryEmail = server.SendCustomAccountRecoveryEmail(
    {
        EmailTemplateId: emailTemplateId,
        Email: email,
        Username: username
    });
    return(SendCustomAccountRecoveryEmail);
}//emailTemplateId, email, username
function SendEmailFromTemplate(emailTemplateId, playFabId)
{
    var SendEmailFromTemplate = server.SendEmailFromTemplate(
    {
        EmailTemplateId: emailTemplateId,
        PlayFabId: playFabId
    });
    return(SendEmailFromTemplate);
}//emailTemplateId, playFabId
function SendPushNotification(recipient)
{
    var SendPushNotification = server.SendPushNotification(
    {
        Recipient: recipient
    });
    return(SendPushNotification);
}//recipient
function SendPushNotification(recipient, advancedPlatformDelivery)
{
    var SendPushNotification = server.SendPushNotification(
    {
        Recipient: recipient,
        AdvancedPlatformDelivery: advancedPlatformDelivery
    });
    return(SendPushNotification);
}//recipient, advancedPlatformDelivery
function SendPushNotification(recipient, advancedPlatformDelivery, message)
{
    var SendPushNotification = server.SendPushNotification(
    {
        Recipient: recipient,
        AdvancedPlatformDelivery: advancedPlatformDelivery,
        Message: message
    });
    return(SendPushNotification);
}//recipient, advancedPlatformDelivery, message
function SendPushNotification(recipient, advancedPlatformDelivery, message, package)
{
    var SendPushNotification = server.SendPushNotification(
    {
        Recipient: recipient,
        AdvancedPlatformDelivery: advancedPlatformDelivery,
        Message: message,
        Package: package
    });
    return(SendPushNotification);
}//recipient, advancedPlatformDelivery, message, package
function SendPushNotification(recipient, advancedPlatformDelivery, message, package, subject)
{
    var SendPushNotification = server.SendPushNotification(
    {
        Recipient: recipient,
        AdvancedPlatformDelivery: advancedPlatformDelivery,
        Message: message,
        Package: package,
        Subject: subject
    });
    return(SendPushNotification);
}//recipient, advancedPlatformDelivery, message, package, subject
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
}//recipient, advancedPlatformDelivery, message, package, subject, targetPlatforms
function SendPushNotificationFromTemplate(pushNotificationTemplateId, recipient)
{
    var SendPushNotificationFromTemplate = server.SendPushNotificationFromTemplate(
    {
        PushNotificationTemplateId: pushNotificationTemplateId,
        Recipient: recipient
    });
    return(SendPushNotificationFromTemplate);
}//pushNotificationTemplateId, recipient
function UnlinkNintendoServiceAccount(playFabId)
{
    var UnlinkNintendoServiceAccount = server.UnlinkNintendoServiceAccount(
    {
        PlayFabId: playFabId
    });
    return(UnlinkNintendoServiceAccount);
}//playFabId
function UnlinkNintendoSwitchDeviceId(playFabId)
{
    var UnlinkNintendoSwitchDeviceId = server.UnlinkNintendoSwitchDeviceId(
    {
        PlayFabId: playFabId
    });
    return(UnlinkNintendoSwitchDeviceId);
}//playFabId
function UnlinkNintendoSwitchDeviceId(playFabId, nintendoSwitchDeviceId)
{
    var UnlinkNintendoSwitchDeviceId = server.UnlinkNintendoSwitchDeviceId(
    {
        PlayFabId: playFabId,
        NintendoSwitchDeviceId: nintendoSwitchDeviceId
    });
    return(UnlinkNintendoSwitchDeviceId);
}//playFabId, nintendoSwitchDeviceId
function UnlinkPSNAccount(playFabId)
{
    var UnlinkPSNAccount = server.UnlinkPSNAccount(
    {
        PlayFabId: playFabId
    });
    return(UnlinkPSNAccount);
}//playFabId
function UnlinkServerCustomId(playFabId, serverCustomId)
{
    var UnlinkServerCustomId = server.UnlinkServerCustomId(
    {
        PlayFabId: playFabId,
        ServerCustomId: serverCustomId
    });
    return(UnlinkServerCustomId);
}//playFabId, serverCustomId
function UnlinkXboxAccount(playFabId)
{
    var UnlinkXboxAccount = server.UnlinkXboxAccount(
    {
        PlayFabId: playFabId
    });
    return(UnlinkXboxAccount);
}//playFabId
function UpdateAvatarUrl(imageUrl, playFabId)
{
    var UpdateAvatarUrl = server.UpdateAvatarUrl(
    {
        ImageUrl: imageUrl,
        PlayFabId: playFabId
    });
    return(UpdateAvatarUrl);
}//imageUrl, playFabId
function UpdateBans(bans)
{
    var UpdateBans = server.UpdateBans(
    {
        Bans: bans
    });
    return(UpdateBans);
}//bans
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Analytics
//-------------------------------------------------------------------------------------------------------------------------------
function WriteCharacterEvent(characterId, eventName, playFabId)
{
    var WriteCharacterEvent = server.WriteCharacterEvent(
    {
        CharacterId: characterId,
        EventName: eventName,
        PlayFabId: playFabId
    });
    return(WriteCharacterEvent);
}//characterId, eventName, playFabId
function WriteCharacterEvent(characterId, eventName, playFabId, body)
{
    var WriteCharacterEvent = server.WriteCharacterEvent(
    {
        CharacterId: characterId,
        EventName: eventName,
        PlayFabId: playFabId,
        Body: body
    });
    return(WriteCharacterEvent);
}//characterId, eventName, playFabId, body
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
}//characterId, eventName, playFabId, body, timestamp
function WritePlayerEvent(eventName, playFabId)
{
    var WritePlayerEvent = server.WritePlayerEvent(
    {
        EventName: eventName,
        PlayFabId: playFabId
    });
    return(WritePlayerEvent);
}//eventName, playFabId
function WritePlayerEvent(eventName, playFabId, body)
{
    var WritePlayerEvent = server.WritePlayerEvent(
    {
        EventName: eventName,
        PlayFabId: playFabId,
        Body: body
    });
    return(WritePlayerEvent);
}//eventName, playFabId, body
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
}//eventName, playFabId, body, timestamp
function WriteTitleEvent(eventName)
{
    var WriteTitleEvent = server.WriteTitleEvent(
    {
        EventName: eventName
    });
    return(WriteTitleEvent);
}//eventName
function WriteTitleEvent(eventName, body)
{
    var WriteTitleEvent = server.WriteTitleEvent(
    {
        EventName: eventName,
        Body: body
    });
    return(WriteTitleEvent);
}//eventName, body
function WriteTitleEvent(eventName, body, timestamp)
{
    var WriteTitleEvent = server.WriteTitleEvent(
    {
        EventName: eventName,
        Body: body,
        Timestamp: timestamp
    });
    return(WriteTitleEvent);
}//eventName, body, timestamp
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Authentication
//-------------------------------------------------------------------------------------------------------------------------------
function AuthenticateSessionTicket(sessionTicket)
{
    var AuthenticateSessionTicket = server.AuthenticateSessionTicket(
    {
        SessionTicket: sessionTicket
    });
    return(AuthenticateSessionTicket);
}//sessionTicket
function LoginWithServerCustomId()
{
    var LoginWithServerCustomId = server.LoginWithServerCustomId(
    {
    });
    return(LoginWithServerCustomId);
}//
function LoginWithServerCustomId(createAccount)
{
    var LoginWithServerCustomId = server.LoginWithServerCustomId(
    {
        CreateAccount: createAccount
    });
    return(LoginWithServerCustomId);
}//createAccount
function LoginWithServerCustomId(createAccount, infoRequestParameters)
{
    var LoginWithServerCustomId = server.LoginWithServerCustomId(
    {
        CreateAccount: createAccount,
        InfoRequestParameters: infoRequestParameters
    });
    return(LoginWithServerCustomId);
}//createAccount, infoRequestParameters
function LoginWithServerCustomId(createAccount, infoRequestParameters, playerSecret)
{
    var LoginWithServerCustomId = server.LoginWithServerCustomId(
    {
        CreateAccount: createAccount,
        InfoRequestParameters: infoRequestParameters,
        PlayerSecret: playerSecret
    });
    return(LoginWithServerCustomId);
}//createAccount, infoRequestParameters, playerSecret
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
}//createAccount, infoRequestParameters, playerSecret, serverCustomId
function LoginWithSteamId(steamId)
{
    var LoginWithSteamId = server.LoginWithSteamId(
    {
        SteamId: steamId
    });
    return(LoginWithSteamId);
}//steamId
function LoginWithSteamId(steamId, createAccount)
{
    var LoginWithSteamId = server.LoginWithSteamId(
    {
        SteamId: steamId,
        CreateAccount: createAccount
    });
    return(LoginWithSteamId);
}//steamId, createAccount
function LoginWithSteamId(steamId, createAccount, infoRequestParameters)
{
    var LoginWithSteamId = server.LoginWithSteamId(
    {
        SteamId: steamId,
        CreateAccount: createAccount,
        InfoRequestParameters: infoRequestParameters
    });
    return(LoginWithSteamId);
}//steamId, createAccount, infoRequestParameters
function LoginWithXbox(xboxToken)
{
    var LoginWithXbox = server.LoginWithXbox(
    {
        XboxToken: xboxToken
    });
    return(LoginWithXbox);
}//xboxToken
function LoginWithXbox(xboxToken, createAccount)
{
    var LoginWithXbox = server.LoginWithXbox(
    {
        XboxToken: xboxToken,
        CreateAccount: createAccount
    });
    return(LoginWithXbox);
}//xboxToken, createAccount
function LoginWithXbox(xboxToken, createAccount, infoRequestParameters)
{
    var LoginWithXbox = server.LoginWithXbox(
    {
        XboxToken: xboxToken,
        CreateAccount: createAccount,
        InfoRequestParameters: infoRequestParameters
    });
    return(LoginWithXbox);
}//xboxToken, createAccount, infoRequestParameters
function LoginWithXboxId(sandbox, xboxId)
{
    var LoginWithXboxId = server.LoginWithXboxId(
    {
        Sandbox: sandbox,
        XboxId: xboxId
    });
    return(LoginWithXboxId);
}//sandbox, xboxId
function LoginWithXboxId(sandbox, xboxId, createAccount)
{
    var LoginWithXboxId = server.LoginWithXboxId(
    {
        Sandbox: sandbox,
        XboxId: xboxId,
        CreateAccount: createAccount
    });
    return(LoginWithXboxId);
}//sandbox, xboxId, createAccount
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
}//sandbox, xboxId, createAccount, infoRequestParameters
function SetPlayerSecret(playFabId)
{
    var SetPlayerSecret = server.SetPlayerSecret(
    {
        PlayFabId: playFabId
    });
    return(SetPlayerSecret);
}//playFabId
function SetPlayerSecret(playFabId, playerSecret)
{
    var SetPlayerSecret = server.SetPlayerSecret(
    {
        PlayFabId: playFabId,
        PlayerSecret: playerSecret
    });
    return(SetPlayerSecret);
}//playFabId, playerSecret
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Character Data
//-------------------------------------------------------------------------------------------------------------------------------
function GetCharacterData(characterId, playFabId)
{
    var GetCharacterData = server.GetCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId
    });
    return(GetCharacterData);
}//characterId, playFabId
function GetCharacterData(characterId, playFabId, ifChangedFromDataVersion)
{
    var GetCharacterData = server.GetCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetCharacterData);
}//characterId, playFabId, ifChangedFromDataVersion
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
}//characterId, playFabId, ifChangedFromDataVersion, keys
function GetCharacterInternalData(characterId, playFabId)
{
    var GetCharacterInternalData = server.GetCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId
    });
    return(GetCharacterInternalData);
}//characterId, playFabId
function GetCharacterInternalData(characterId, playFabId, ifChangedFromDataVersion)
{
    var GetCharacterInternalData = server.GetCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetCharacterInternalData);
}//characterId, playFabId, ifChangedFromDataVersion
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
}//characterId, playFabId, ifChangedFromDataVersion, keys
function GetCharacterReadOnlyData(characterId, playFabId)
{
    var GetCharacterReadOnlyData = server.GetCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId
    });
    return(GetCharacterReadOnlyData);
}//characterId, playFabId
function GetCharacterReadOnlyData(characterId, playFabId, ifChangedFromDataVersion)
{
    var GetCharacterReadOnlyData = server.GetCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetCharacterReadOnlyData);
}//characterId, playFabId, ifChangedFromDataVersion
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
}//characterId, playFabId, ifChangedFromDataVersion, keys
function UpdateCharacterData(characterId, playFabId)
{
    var UpdateCharacterData = server.UpdateCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId
    });
    return(UpdateCharacterData);
}//characterId, playFabId
function UpdateCharacterData(characterId, playFabId, data)
{
    var UpdateCharacterData = server.UpdateCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        Data: data
    });
    return(UpdateCharacterData);
}//characterId, playFabId, data
function UpdateCharacterData(characterId, playFabId, data, keysToRemove)
{
    var UpdateCharacterData = server.UpdateCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateCharacterData);
}//characterId, playFabId, data, keysToRemove
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
}//characterId, playFabId, data, keysToRemove, permission
function UpdateCharacterInternalData(characterId, playFabId)
{
    var UpdateCharacterInternalData = server.UpdateCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId
    });
    return(UpdateCharacterInternalData);
}//characterId, playFabId
function UpdateCharacterInternalData(characterId, playFabId, data)
{
    var UpdateCharacterInternalData = server.UpdateCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        Data: data
    });
    return(UpdateCharacterInternalData);
}//characterId, playFabId, data
function UpdateCharacterInternalData(characterId, playFabId, data, keysToRemove)
{
    var UpdateCharacterInternalData = server.UpdateCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateCharacterInternalData);
}//characterId, playFabId, data, keysToRemove
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
}//characterId, playFabId, data, keysToRemove, permission
function UpdateCharacterReadOnlyData(characterId, playFabId)
{
    var UpdateCharacterReadOnlyData = server.UpdateCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId
    });
    return(UpdateCharacterReadOnlyData);
}//characterId, playFabId
function UpdateCharacterReadOnlyData(characterId, playFabId, data)
{
    var UpdateCharacterReadOnlyData = server.UpdateCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        Data: data
    });
    return(UpdateCharacterReadOnlyData);
}//characterId, playFabId, data
function UpdateCharacterReadOnlyData(characterId, playFabId, data, keysToRemove)
{
    var UpdateCharacterReadOnlyData = server.UpdateCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateCharacterReadOnlyData);
}//characterId, playFabId, data, keysToRemove
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
}//characterId, playFabId, data, keysToRemove, permission
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Characters
//-------------------------------------------------------------------------------------------------------------------------------
function DeleteCharacterFromUser(characterId, playFabId, saveCharacterInventory)
{
    var DeleteCharacterFromUser = server.DeleteCharacterFromUser(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        SaveCharacterInventory: saveCharacterInventory
    });
    return(DeleteCharacterFromUser);
}//characterId, playFabId, saveCharacterInventory
function GetAllUsersCharacters(playFabId)
{
    var GetAllUsersCharacters = server.GetAllUsersCharacters(
    {
        PlayFabId: playFabId
    });
    return(GetAllUsersCharacters);
}//playFabId
function GetCharacterLeaderboard(maxResultsCount, startPosition, statisticName)
{
    var GetCharacterLeaderboard = server.GetCharacterLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        StartPosition: startPosition,
        StatisticName: statisticName
    });
    return(GetCharacterLeaderboard);
}//maxResultsCount, startPosition, statisticName
function GetCharacterStatistics(characterId, playFabId)
{
    var GetCharacterStatistics = server.GetCharacterStatistics(
    {
        CharacterId: characterId,
        PlayFabId: playFabId
    });
    return(GetCharacterStatistics);
}//characterId, playFabId
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
}//characterId, maxResultsCount, playFabId, statisticName
function GetLeaderboardForUserCharacters(playFabId, statisticName)
{
    var GetLeaderboardForUserCharacters = server.GetLeaderboardForUserCharacters(
    {
        PlayFabId: playFabId,
        StatisticName: statisticName
    });
    return(GetLeaderboardForUserCharacters);
}//playFabId, statisticName
function GrantCharacterToUser(characterName, characterType, playFabId)
{
    var GrantCharacterToUser = server.GrantCharacterToUser(
    {
        CharacterName: characterName,
        CharacterType: characterType,
        PlayFabId: playFabId
    });
    return(GrantCharacterToUser);
}//characterName, characterType, playFabId
function UpdateCharacterStatistics(characterId, playFabId)
{
    var UpdateCharacterStatistics = server.UpdateCharacterStatistics(
    {
        CharacterId: characterId,
        PlayFabId: playFabId
    });
    return(UpdateCharacterStatistics);
}//characterId, playFabId
function UpdateCharacterStatistics(characterId, playFabId, characterStatistics)
{
    var UpdateCharacterStatistics = server.UpdateCharacterStatistics(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        CharacterStatistics: characterStatistics
    });
    return(UpdateCharacterStatistics);
}//characterId, playFabId, characterStatistics
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Content
//-------------------------------------------------------------------------------------------------------------------------------
function GetContentDownloadUrl(key)
{
    var GetContentDownloadUrl = server.GetContentDownloadUrl(
    {
        Key: key
    });
    return(GetContentDownloadUrl);
}//key
function GetContentDownloadUrl(key, httpMethod)
{
    var GetContentDownloadUrl = server.GetContentDownloadUrl(
    {
        Key: key,
        HttpMethod: httpMethod
    });
    return(GetContentDownloadUrl);
}//key, httpMethod
function GetContentDownloadUrl(key, httpMethod, thruCDN)
{
    var GetContentDownloadUrl = server.GetContentDownloadUrl(
    {
        Key: key,
        HttpMethod: httpMethod,
        ThruCDN: thruCDN
    });
    return(GetContentDownloadUrl);
}//key, httpMethod, thruCDN
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Friend List Management
//-------------------------------------------------------------------------------------------------------------------------------
function AddFriend(playFabId, friendEmail)
{
    var AddFriend = server.AddFriend(
    {
        PlayFabId: playFabId,
        FriendEmail: friendEmail
    });
    return(AddFriend);
}//playFabId, friendEmail
function AddFriend(playFabId, friendPlayFabId)
{
    var AddFriend = server.AddFriend(
    {
        PlayFabId: playFabId,
        FriendPlayFabId: friendPlayFabId
    });
    return(AddFriend);
}//playFabId, friendPlayFabId
function AddFriend(playFabId, friendTitleDisplayName)
{
    var AddFriend = server.AddFriend(
    {
        PlayFabId: playFabId,
        FriendTitleDisplayName: friendTitleDisplayName
    });
    return(AddFriend);
}//playFabId, friendTitleDisplayName
function AddFriend(playFabId, friendUsername)
{
    var AddFriend = server.AddFriend(
    {
        PlayFabId: playFabId,
        FriendUsername: friendUsername
    });
    return(AddFriend);
}//playFabId, friendUsername
function GetFriendsList(playFabId)
{
    var GetFriendsList = server.GetFriendsList(
    {
        PlayFabId: playFabId
    });
    return(GetFriendsList);
}//playFabId
function GetFriendsList(playFabId, externalPlatformFriends)
{
    var GetFriendsList = server.GetFriendsList(
    {
        PlayFabId: playFabId,
        ExternalPlatformFriends: externalPlatformFriends
    });
    return(GetFriendsList);
}//playFabId, externalPlatformFriends
function GetFriendsList(playFabId, externalPlatformFriends, profileConstraints)
{
    var GetFriendsList = server.GetFriendsList(
    {
        PlayFabId: playFabId,
        ExternalPlatformFriends: externalPlatformFriends,
        ProfileConstraints: profileConstraints
    });
    return(GetFriendsList);
}//playFabId, externalPlatformFriends, profileConstraints
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
}//playFabId, externalPlatformFriends, profileConstraints, xboxToken
function RemoveFriend(friendPlayFabId, playFabId)
{
    var RemoveFriend = server.RemoveFriend(
    {
        FriendPlayFabId: friendPlayFabId,
        PlayFabId: playFabId
    });
    return(RemoveFriend);
}//friendPlayFabId, playFabId
function SetFriendTags(friendPlayFabId, playFabId, tags)
{
    var SetFriendTags = server.SetFriendTags(
    {
        FriendPlayFabId: friendPlayFabId,
        PlayFabId: playFabId,
        Tags: tags
    });
    return(SetFriendTags);
}//friendPlayFabId, playFabId, tags
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Matchmaking
//-------------------------------------------------------------------------------------------------------------------------------
function DeregisterGame(lobbyId)
{
    var DeregisterGame = server.DeregisterGame(
    {
        LobbyId: lobbyId
    });
    return(DeregisterGame);
}//lobbyId
function NotifyMatchmakerPlayerLeft(lobbyId, playFabId)
{
    var NotifyMatchmakerPlayerLeft = server.NotifyMatchmakerPlayerLeft(
    {
        LobbyId: lobbyId,
        PlayFabId: playFabId
    });
    return(NotifyMatchmakerPlayerLeft);
}//lobbyId, playFabId
function RedeemMatchmakerTicket(lobbyId, ticket)
{
    var RedeemMatchmakerTicket = server.RedeemMatchmakerTicket(
    {
        LobbyId: lobbyId,
        Ticket: ticket
    });
    return(RedeemMatchmakerTicket);
}//lobbyId, ticket
function RefreshGameServerInstanceHeartbeat(lobbyId)
{
    var RefreshGameServerInstanceHeartbeat = server.RefreshGameServerInstanceHeartbeat(
    {
        LobbyId: lobbyId
    });
    return(RefreshGameServerInstanceHeartbeat);
}//lobbyId
function RegisterGame(build, gameMode, region, serverPort)
{
    var RegisterGame = server.RegisterGame(
    {
        Build: build,
        GameMode: gameMode,
        Region: region,
        ServerPort: serverPort
    });
    return(RegisterGame);
}//build, gameMode, region, serverPort
function RegisterGame(build, gameMode, region, serverPort, lobbyId)
{
    var RegisterGame = server.RegisterGame(
    {
        Build: build,
        GameMode: gameMode,
        Region: region,
        ServerPort: serverPort,
        LobbyId: lobbyId
    });
    return(RegisterGame);
}//build, gameMode, region, serverPort, lobbyId
function RegisterGame(build, gameMode, region, serverPort, lobbyId, serverIPV4Address)
{
    var RegisterGame = server.RegisterGame(
    {
        Build: build,
        GameMode: gameMode,
        Region: region,
        ServerPort: serverPort,
        LobbyId: lobbyId,
        ServerIPV4Address: serverIPV4Address
    });
    return(RegisterGame);
}//build, gameMode, region, serverPort, lobbyId, serverIPV4Address
function RegisterGame(build, gameMode, region, serverPort, lobbyId, serverIPV4Address, serverIPV6Address)
{
    var RegisterGame = server.RegisterGame(
    {
        Build: build,
        GameMode: gameMode,
        Region: region,
        ServerPort: serverPort,
        LobbyId: lobbyId,
        ServerIPV4Address: serverIPV4Address,
        ServerIPV6Address: serverIPV6Address
    });
    return(RegisterGame);
}//build, gameMode, region, serverPort, lobbyId, serverIPV4Address, serverIPV6Address
function RegisterGame(build, gameMode, region, serverPort, lobbyId, serverIPV4Address, serverIPV6Address, serverPublicDNSName)
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
        ServerPublicDNSName: serverPublicDNSName
    });
    return(RegisterGame);
}//build, gameMode, region, serverPort, lobbyId, serverIPV4Address, serverIPV6Address, serverPublicDNSName
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
}//build, gameMode, region, serverPort, lobbyId, serverIPV4Address, serverIPV6Address, serverPublicDNSName, tags
function SetGameServerInstanceData(gameServerData, lobbyId)
{
    var SetGameServerInstanceData = server.SetGameServerInstanceData(
    {
        GameServerData: gameServerData,
        LobbyId: lobbyId
    });
    return(SetGameServerInstanceData);
}//gameServerData, lobbyId
function SetGameServerInstanceState(lobbyId, state)
{
    var SetGameServerInstanceState = server.SetGameServerInstanceState(
    {
        LobbyId: lobbyId,
        State: state
    });
    return(SetGameServerInstanceState);
}//lobbyId, state
function SetGameServerInstanceTags(lobbyId, tags)
{
    var SetGameServerInstanceTags = server.SetGameServerInstanceTags(
    {
        LobbyId: lobbyId,
        Tags: tags
    });
    return(SetGameServerInstanceTags);
}//lobbyId, tags
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Platform Specific Methods
//-------------------------------------------------------------------------------------------------------------------------------
function AwardSteamAchievement(achievements)
{
    var AwardSteamAchievement = server.AwardSteamAchievement(
    {
        Achievements: achievements
    });
    return(AwardSteamAchievement);
}//achievements
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Play Stream
//-------------------------------------------------------------------------------------------------------------------------------
function AddPlayerTag(playFabId, tagName)
{
    var AddPlayerTag = server.AddPlayerTag(
    {
        PlayFabId: playFabId,
        TagName: tagName
    });
    return(AddPlayerTag);
}//playFabId, tagName
function GetAllSegments()
{
    var GetAllSegments = server.GetAllSegments({});
    return(GetAllSegments);
}//
function GetPlayerSegments(playFabId)
{
    var GetPlayerSegments = server.GetPlayerSegments(
    {
        PlayFabId: playFabId
    });
    return(GetPlayerSegments);
}//playFabId
function GetPlayerTags(playFabId)
{
    var GetPlayerTags = server.GetPlayerTags(
    {
        PlayFabId: playFabId
    });
    return(GetPlayerTags);
}//playFabId
function GetPlayerTags(playFabId, namespace)
{
    var GetPlayerTags = server.GetPlayerTags(
    {
        PlayFabId: playFabId,
        Namespace: namespace
    });
    return(GetPlayerTags);
}//playFabId, namespace
function GetPlayersInSegment(segmentId)
{
    var GetPlayersInSegment = server.GetPlayersInSegment(
    {
        SegmentId: segmentId
    });
    return(GetPlayersInSegment);
}//segmentId
function GetPlayersInSegment(segmentId, continuationToken)
{
    var GetPlayersInSegment = server.GetPlayersInSegment(
    {
        SegmentId: segmentId,
        ContinuationToken: continuationToken
    });
    return(GetPlayersInSegment);
}//segmentId, continuationToken
function GetPlayersInSegment(segmentId, continuationToken, getProfilesAsync)
{
    var GetPlayersInSegment = server.GetPlayersInSegment(
    {
        SegmentId: segmentId,
        ContinuationToken: continuationToken,
        GetProfilesAsync: getProfilesAsync
    });
    return(GetPlayersInSegment);
}//segmentId, continuationToken, getProfilesAsync
function GetPlayersInSegment(segmentId, continuationToken, getProfilesAsync, maxBatchSize)
{
    var GetPlayersInSegment = server.GetPlayersInSegment(
    {
        SegmentId: segmentId,
        ContinuationToken: continuationToken,
        GetProfilesAsync: getProfilesAsync,
        MaxBatchSize: maxBatchSize
    });
    return(GetPlayersInSegment);
}//segmentId, continuationToken, getProfilesAsync, maxBatchSize
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
}//segmentId, continuationToken, getProfilesAsync, maxBatchSize, secondsToLive
function RemovePlayerTag(playFabId, tagName)
{
    var RemovePlayerTag = server.RemovePlayerTag(
    {
        PlayFabId: playFabId,
        TagName: tagName
    });
    return(RemovePlayerTag);
}//playFabId, tagName
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Player Data Management
//-------------------------------------------------------------------------------------------------------------------------------
function GetFriendLeaderboard(maxResultsCount, playFabId, startPosition, statisticName)
{
    var GetFriendLeaderboard = server.GetFriendLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: playFabId,
        StartPosition: startPosition,
        StatisticName: statisticName
    });
    return(GetFriendLeaderboard);
}//maxResultsCount, playFabId, startPosition, statisticName
function GetFriendLeaderboard(maxResultsCount, playFabId, startPosition, statisticName, externalPlatformFriends)
{
    var GetFriendLeaderboard = server.GetFriendLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: playFabId,
        StartPosition: startPosition,
        StatisticName: statisticName,
        ExternalPlatformFriends: externalPlatformFriends
    });
    return(GetFriendLeaderboard);
}//maxResultsCount, playFabId, startPosition, statisticName, externalPlatformFriends
function GetFriendLeaderboard(maxResultsCount, playFabId, startPosition, statisticName, externalPlatformFriends, profileConstraints)
{
    var GetFriendLeaderboard = server.GetFriendLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: playFabId,
        StartPosition: startPosition,
        StatisticName: statisticName,
        ExternalPlatformFriends: externalPlatformFriends,
        ProfileConstraints: profileConstraints
    });
    return(GetFriendLeaderboard);
}//maxResultsCount, playFabId, startPosition, statisticName, externalPlatformFriends, profileConstraints
function GetFriendLeaderboard(maxResultsCount, playFabId, startPosition, statisticName, externalPlatformFriends, profileConstraints, version)
{
    var GetFriendLeaderboard = server.GetFriendLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: playFabId,
        StartPosition: startPosition,
        StatisticName: statisticName,
        ExternalPlatformFriends: externalPlatformFriends,
        ProfileConstraints: profileConstraints,
        UseSpecificVersion: true,
        Version: version
    });
    return(GetFriendLeaderboard);
}//maxResultsCount, playFabId, startPosition, statisticName, externalPlatformFriends, profileConstraints, version
function GetFriendLeaderboard(maxResultsCount, playFabId, startPosition, statisticName, externalPlatformFriends, profileConstraints, version, xboxToken)
{
    var GetFriendLeaderboard = server.GetFriendLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: playFabId,
        StartPosition: startPosition,
        StatisticName: statisticName,
        ExternalPlatformFriends: externalPlatformFriends,
        ProfileConstraints: profileConstraints,
        UseSpecificVersion: true,
        Version: version,
        XboxToken: xboxToken
    });
    return(GetFriendLeaderboard);
}//maxResultsCount, playFabId, startPosition, statisticName, externalPlatformFriends, profileConstraints, version, xboxToken
function GetLeaderboard(maxResultsCount, startPosition, statisticName)
{
    var GetLeaderboard = server.GetLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        StartPosition: startPosition,
        StatisticName: statisticName
    });
    return(GetLeaderboard);
}//maxResultsCount, startPosition, statisticName
function GetLeaderboard(maxResultsCount, startPosition, statisticName, profileConstraints)
{
    var GetLeaderboard = server.GetLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        StartPosition: startPosition,
        StatisticName: statisticName,
        ProfileConstraints: profileConstraints
    });
    return(GetLeaderboard);
}//maxResultsCount, startPosition, statisticName, profileConstraints
function GetLeaderboard(maxResultsCount, startPosition, statisticName, profileConstraints, version)
{
    var GetLeaderboard = server.GetLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        StartPosition: startPosition,
        StatisticName: statisticName,
        ProfileConstraints: profileConstraints,
        UseSpecificVersion: true,
        Version: version
    });
    return(GetLeaderboard);
}//maxResultsCount, startPosition, statisticName, profileConstraints, version
function GetLeaderboardAroundUser(maxResultsCount, playFabId, statisticName)
{
    var GetLeaderboardAroundUser = server.GetLeaderboardAroundUser(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: playFabId,
        StatisticName: statisticName
    });
    return(GetLeaderboardAroundUser);
}//maxResultsCount, playFabId, statisticName
function GetLeaderboardAroundUser(maxResultsCount, playFabId, statisticName, profileConstraints)
{
    var GetLeaderboardAroundUser = server.GetLeaderboardAroundUser(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: playFabId,
        StatisticName: statisticName,
        ProfileConstraints: profileConstraints
    });
    return(GetLeaderboardAroundUser);
}//maxResultsCount, playFabId, statisticName, profileConstraints
function GetLeaderboardAroundUser(maxResultsCount, playFabId, statisticName, profileConstraints, version)
{
    var GetLeaderboardAroundUser = server.GetLeaderboardAroundUser(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: playFabId,
        StatisticName: statisticName,
        ProfileConstraints: profileConstraints,
        UseSpecificVersion: true,
        Version: version
    });
    return(GetLeaderboardAroundUser);
}//maxResultsCount, playFabId, statisticName, profileConstraints, version
function GetPlayerCombinedInfo(infoRequestParameters, playFabId)
{
    var GetPlayerCombinedInfo = server.GetPlayerCombinedInfo(
    {
        InfoRequestParameters: infoRequestParameters,
        PlayFabId: playFabId
    });
    return(GetPlayerCombinedInfo);
}//infoRequestParameters, playFabId
function GetPlayerStatisticVersions(statisticName)
{
    var GetPlayerStatisticVersions = server.GetPlayerStatisticVersions(
    {
        StatisticName: statisticName
    });
    return(GetPlayerStatisticVersions);
}//statisticName
function GetPlayerStatistics(playFabId)
{
    var GetPlayerStatistics = server.GetPlayerStatistics(
    {
        PlayFabId: playFabId
    });
    return(GetPlayerStatistics);
}//playFabId
function GetPlayerStatistics(playFabId, statisticNameVersions)
{
    var GetPlayerStatistics = server.GetPlayerStatistics(
    {
        PlayFabId: playFabId,
        StatisticNameVersions: statisticNameVersions
    });
    return(GetPlayerStatistics);
}//playFabId, statisticNameVersions
function GetPlayerStatistics(playFabId, statisticNameVersions, statisticNames)
{
    var GetPlayerStatistics = server.GetPlayerStatistics(
    {
        PlayFabId: playFabId,
        StatisticNameVersions: statisticNameVersions,
        StatisticNames: statisticNames
    });
    return(GetPlayerStatistics);
}//playFabId, statisticNameVersions, statisticNames
function GetUserData(playFabId)
{
    var GetUserData = server.GetUserData(
    {
        PlayFabId: playFabId
    });
    return(GetUserData);
}//playFabId
function GetUserData(playFabId, ifChangedFromDataVersion)
{
    var GetUserData = server.GetUserData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetUserData);
}//playFabId, ifChangedFromDataVersion
function GetUserData(playFabId, ifChangedFromDataVersion, keys)
{
    var GetUserData = server.GetUserData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserData);
}//playFabId, ifChangedFromDataVersion, keys
function GetUserInternalData(playFabId)
{
    var GetUserInternalData = server.GetUserInternalData(
    {
        PlayFabId: playFabId
    });
    return(GetUserInternalData);
}//playFabId
function GetUserInternalData(playFabId, ifChangedFromDataVersion)
{
    var GetUserInternalData = server.GetUserInternalData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetUserInternalData);
}//playFabId, ifChangedFromDataVersion
function GetUserInternalData(playFabId, ifChangedFromDataVersion, keys)
{
    var GetUserInternalData = server.GetUserInternalData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserInternalData);
}//playFabId, ifChangedFromDataVersion, keys
function GetUserPublisherData(playFabId)
{
    var GetUserPublisherData = server.GetUserPublisherData(
    {
        PlayFabId: playFabId
    });
    return(GetUserPublisherData);
}//playFabId
function GetUserPublisherData(playFabId, ifChangedFromDataVersion)
{
    var GetUserPublisherData = server.GetUserPublisherData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetUserPublisherData);
}//playFabId, ifChangedFromDataVersion
function GetUserPublisherData(playFabId, ifChangedFromDataVersion, keys)
{
    var GetUserPublisherData = server.GetUserPublisherData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserPublisherData);
}//playFabId, ifChangedFromDataVersion, keys
function GetUserPublisherInternalData(playFabId)
{
    var GetUserPublisherInternalData = server.GetUserPublisherInternalData(
    {
        PlayFabId: playFabId
    });
    return(GetUserPublisherInternalData);
}//playFabId
function GetUserPublisherInternalData(playFabId, ifChangedFromDataVersion)
{
    var GetUserPublisherInternalData = server.GetUserPublisherInternalData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetUserPublisherInternalData);
}//playFabId, ifChangedFromDataVersion
function GetUserPublisherInternalData(playFabId, ifChangedFromDataVersion, keys)
{
    var GetUserPublisherInternalData = server.GetUserPublisherInternalData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserPublisherInternalData);
}//playFabId, ifChangedFromDataVersion, keys
function GetUserPublisherReadOnlyData(playFabId)
{
    var GetUserPublisherReadOnlyData = server.GetUserPublisherReadOnlyData(
    {
        PlayFabId: currentPlayerId
    });
    return(GetUserPublisherReadOnlyData);
}//playFabId
function GetUserPublisherReadOnlyData(playFabId, ifChangedFromDataVersion)
{
    var GetUserPublisherReadOnlyData = server.GetUserPublisherReadOnlyData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetUserPublisherReadOnlyData);
}//playFabId, ifChangedFromDataVersion
function GetUserPublisherReadOnlyData(playFabId, ifChangedFromDataVersion, keys)
{
    var GetUserPublisherReadOnlyData = server.GetUserPublisherReadOnlyData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserPublisherReadOnlyData);
}//playFabId, ifChangedFromDataVersion, keys
function GetUserReadOnlyData(playFabId)
{
    var GetUserReadOnlyData = server.GetUserReadOnlyData(
    {
        PlayFabId: playFabId
    });
    return(GetUserReadOnlyData);
}//playFabId
function GetUserReadOnlyData(playFabId, ifChangedFromDataVersion)
{
    var GetUserReadOnlyData = server.GetUserReadOnlyData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetUserReadOnlyData);
}//playFabId, ifChangedFromDataVersion
function GetUserReadOnlyData(playFabId, ifChangedFromDataVersion, keys)
{
    var GetUserReadOnlyData = server.GetUserReadOnlyData(
    {
        PlayFabId: playFabId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserReadOnlyData);
}//playFabId, ifChangedFromDataVersion, keys
function UpdatePlayerStatistics(playFabId, statistics)
{
    var UpdatePlayerStatistics = server.UpdatePlayerStatistics(
    {
        PlayFabId: playFabId,
        Statistics: statistics
    });
    return(UpdatePlayerStatistics);
}//playFabId, statistics
function UpdatePlayerStatistics(playFabId, statistics, forceUpdate)
{
    var UpdatePlayerStatistics = server.UpdatePlayerStatistics(
    {
        PlayFabId: playFabId,
        Statistics: statistics,
        ForceUpdate: forceUpdate
    });
    return(UpdatePlayerStatistics);
}//playFabId, statistics, forceUpdate
function UpdateUserData(playFabId, data)
{
    var UpdateUserData = server.UpdateUserData(
    {
        PlayFabId: playFabId,
        Data: data
    });
    return(UpdateUserData);
}//playFabId, data
function UpdateUserData(playFabId, data, keysToRemove)
{
    var UpdateUserData = server.UpdateUserData(
    {
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserData);
}//playFabId, data, keysToRemove
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
}//playFabId, data, keysToRemove, permission
function UpdateUserInternalData(playFabId, data)
{
    var UpdateUserInternalData = server.UpdateUserInternalData(
    {
        PlayFabId: playFabId,
        Data: data
    });
    return(UpdateUserInternalData);
}//playFabId, data
function UpdateUserInternalData(playFabId, data, keysToRemove)
{
    var UpdateUserInternalData = server.UpdateUserInternalData(
    {
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserInternalData);
}//playFabId, data, keysToRemove
function UpdateUserPublisherData(playFabId, data)
{
    var UpdateUserPublisherData = server.UpdateUserPublisherData(
    {
        PlayFabId: playFabId,
        Data: data
    });
    return(UpdateUserPublisherData);
}//playFabId, data
function UpdateUserPublisherData(playFabId, data, keysToRemove)
{
    var UpdateUserPublisherData = server.UpdateUserPublisherData(
    {
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserPublisherData);
}//playFabId, data, keysToRemove
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
}//playFabId, data, keysToRemove, permission
function UpdateUserPublisherInternalData(playFabId, data)
{
    var UpdateUserPublisherInternalData = server.UpdateUserPublisherInternalData(
    {
        PlayFabId: playFabId,
        Data: data
    });
    return(UpdateUserPublisherInternalData);
}//playFabId, data
function UpdateUserPublisherInternalData(playFabId, data, keysToRemove)
{
    var UpdateUserPublisherInternalData = server.UpdateUserPublisherInternalData(
    {
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserPublisherInternalData);
}//playFabId, data, keysToRemove
function UpdateUserPublisherReadOnlyData(playFabId, data)
{
    var UpdateUserPublisherReadOnlyData = server.UpdateUserPublisherReadOnlyData(
    {
        PlayFabId: playFabId,
        Data: data
    });
    return(UpdateUserPublisherReadOnlyData);
}//playFabId, data
function UpdateUserPublisherReadOnlyData(playFabId, data, keysToRemove)
{
    var UpdateUserPublisherReadOnlyData = server.UpdateUserPublisherReadOnlyData(
    {
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserPublisherReadOnlyData);
}//playFabId, data, keysToRemove
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
}//playFabId, data, keysToRemove, permission
function UpdateUserReadOnlyData(playFabId, data)
{
    var UpdateUserReadOnlyData = server.UpdateUserReadOnlyData(
    {
        PlayFabId: playFabId,
        Data: data
    });
    return(UpdateUserReadOnlyData);
}//playFabId, data
function UpdateUserReadOnlyData(playFabId, data, keysToRemove)
{
    var UpdateUserReadOnlyData = server.UpdateUserReadOnlyData(
    {
        PlayFabId: playFabId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserReadOnlyData);
}//playFabId, data, keysToRemove
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
}//playFabId, data, keysToRemove, permission
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Player Item Management
//-------------------------------------------------------------------------------------------------------------------------------
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
}//amount, characterId, playFabId, virtualCurrency
function AddUserVirtualCurrency(amount, playFabId, virtualCurrency)
{
    var AddUserVirtualCurrency = server.AddUserVirtualCurrency(
    {
        Amount: amount,
        PlayFabId: currentPlayerId,
        VirtualCurrency: virtualCurrency
    });
    return(AddUserVirtualCurrency);
}//amount, playFabId, virtualCurrency
function ConsumeItem(consumeCount, itemInstanceId, playFabId)
{
    var ConsumeItem = server.ConsumeItem(
    {
        ConsumeCount: consumeCount,
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId
    });
    return(ConsumeItem);
}//consumeCount, itemInstanceId, playFabId
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
}//consumeCount, itemInstanceId, playFabId, characterId
function EvaluateRandomResultTable(tableId)
{
    var EvaluateRandomResultTable = server.EvaluateRandomResultTable(
    {
        TableId: tableId
    });
    return(EvaluateRandomResultTable);
}//tableId
function EvaluateRandomResultTable(tableId, catalogVersion)
{
    var EvaluateRandomResultTable = server.EvaluateRandomResultTable(
    {
        TableId: tableId,
        CatalogVersion: catalogVersion
    });
    return(EvaluateRandomResultTable);
}//tableId, catalogVersion
function GetCharacterInventory(characterId, playFabId)
{
    var GetCharacterInventory = server.GetCharacterInventory(
    {
        CharacterId: characterId,
        PlayFabId: playFabId
    });
    return(GetCharacterInventory);
}//characterId, playFabId
function GetCharacterInventory(characterId, playFabId, catalogVersion)
{
    var GetCharacterInventory = server.GetCharacterInventory(
    {
        CharacterId: characterId,
        PlayFabId: playFabId,
        CatalogVersion: catalogVersion
    });
    return(GetCharacterInventory);
}//characterId, playFabId, catalogVersion
function GetRandomResultTables(tableIDs)
{
    var GetRandomResultTables = server.GetRandomResultTables(
    {
        TableIDs: tableIDs
    });
    return(GetRandomResultTables);
}//tableIDs
function GetRandomResultTables(tableIDs, catalogVersion)
{
    var GetRandomResultTables = server.GetRandomResultTables(
    {
        TableIDs: tableIDs,
        CatalogVersion: catalogVersion
    });
    return(GetRandomResultTables);
}//tableIDs, catalogVersion
function GetUserInventory(playFabId)
{
	var GetUserInventory = server.GetUserInventory(
	{
		PlayFabId: playFabId
	});
	return(GetUserInventory);
}//playFabId
function GrantItemsToCharacter(characterId, playFabId)
{
	var GrantItemsToCharacter = server.GrantItemsToCharacter(
	{
		CharacterId: characterId,
		PlayFabId: playFabId
	});
	return(GrantItemsToCharacter);
}//characterId, playFabId
function GrantItemsToCharacter(characterId, playFabId, annotation)
{
	var GrantItemsToCharacter = server.GrantItemsToCharacter(
	{
		CharacterId: characterId,
		PlayFabId: playFabId,
		Annotation: annotation
	});
	return(GrantItemsToCharacter);
}//characterId, playFabId, annotation
function GrantItemsToCharacter(characterId, playFabId, annotation, catalogVersion)
{
	var GrantItemsToCharacter = server.GrantItemsToCharacter(
	{
		CharacterId: characterId,
		PlayFabId: playFabId,
		Annotation: annotation,
		CatalogVersion: catalogVersion
	});
	return(GrantItemsToCharacter);
}//characterId, playFabId, annotation, catalogVersion
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
}//characterId, playFabId, annotation, catalogVersion, itemIds
function GrantItemsToUser(itemIds, playFabId)
{
    var GrantItemsToUser = server.GrantItemsToUser(
    {
        ItemIds: itemIds,
        PlayFabId: playFabId
    });
    return(GrantItemsToUser);
}//itemIds, playFabId
function GrantItemsToUser(itemIds, playFabId, annotation)
{
    var GrantItemsToUser = server.GrantItemsToUser(
    {
        ItemIds: itemIds,
        PlayFabId: playFabId,
        Annotation: annotation
    });
    return(GrantItemsToUser);
}//itemIds, playFabId, annotation
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
}//itemIds, playFabId, annotation, catalogVersion
function GrantItemsToUsers(itemGrants)
{
    var GrantItemsToUsers = server.GrantItemsToUsers(
    {
        ItemGrants: itemGrants
    });
    return(GrantItemsToUsers);
}//itemGrants
function GrantItemsToUsers(itemGrants, catalogVersion)
{
    var GrantItemsToUsers = server.GrantItemsToUsers(
    {
        ItemGrants: itemGrants,
        CatalogVersion: catalogVersion
    });
    return(GrantItemsToUsers);
}//itemGrants, catalogVersion
function ModifyItemUses(itemInstanceId, playFabId, usesToAdd)
{
    var ModifyItemUses = server.ModifyItemUses(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId,
        UsesToAdd: usesToAdd
    });
    return(ModifyItemUses);
}//itemInstanceId, playFabId, usesToAdd
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
}//givingCharacterId, itemInstanceId, playFabId, receivingCharacterId
function MoveItemToCharacterFromUser(characterId, itemInstanceId, playFabId)
{
    var MoveItemToCharacterFromUser = server.MoveItemToCharacterFromUser(
    {
        CharacterId: characterId,
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId
    });
    return(MoveItemToCharacterFromUser);
}//characterId, itemInstanceId, playFabId
function MoveItemToUserFromCharacter(characterId, itemInstanceId, playFabId)
{
    var MoveItemToUserFromCharacter = server.MoveItemToUserFromCharacter(
    {
        CharacterId: characterId,
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId
    });
    return(MoveItemToUserFromCharacter);
}//characterId, itemInstanceId, playFabId
function RedeemCoupon(couponCode, playFabId)
{
    var RedeemCoupon = server.RedeemCoupon(
    {
        CouponCode: couponCode,
        PlayFabId: playFabId
    });
    return(RedeemCoupon);
}//couponCode, playFabId
function RedeemCoupon(couponCode, playFabId, catalogVersion)
{
    var RedeemCoupon = server.RedeemCoupon(
    {
        CouponCode: couponCode,
        PlayFabId: playFabId,
        CatalogVersion: catalogVersion
    });
    return(RedeemCoupon);
}//couponCode, playFabId, catalogVersion
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
}//couponCode, playFabId, catalogVersion, characterId
function ReportPlayer(reporteeId, reporterId)
{
    var ReportPlayer = server.ReportPlayer(
    {
        ReporteeId: reporteeId,
        ReporterId: reporterId
    });
    return(ReportPlayer);
}//reporteeId, reporterId
function ReportPlayer(reporteeId, reporterId, comment)
{
    var ReportPlayer = server.ReportPlayer(
    {
        ReporteeId: reporteeId,
        ReporterId: reporterId,
        Comment: comment
    });
    return(ReportPlayer);
}//reporteeId, reporterId, comment
function RevokeInventoryItem(itemInstanceId, playFabId)
{
    var RevokeInventoryItem = server.RevokeInventoryItem(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId
    });
    return(RevokeInventoryItem);
}//itemInstanceId, playFabId
function RevokeInventoryItem(itemInstanceId, playFabId, characterId)
{
    var RevokeInventoryItem = server.RevokeInventoryItem(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId,
        CharacterId: characterId
    });
    return(RevokeInventoryItem);
}//itemInstanceId, playFabId, characterId
function RevokeInventoryItems(items)
{
    var RevokeInventoryItems = server.RevokeInventoryItems(
    {
        Items: items
    });
    return(RevokeInventoryItems);
}//items
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
}//amount, characterId, playFabId, virtualCurrency
function SubtractUserVirtualCurrency(amount, playFabId, virtualCurrency)
{
    var SubtractUserVirtualCurrency = server.SubtractUserVirtualCurrency(
    {
        Amount: amount,
        PlayFabId: playFabId,
        VirtualCurrency: virtualCurrency
    });
    return(SubtractUserVirtualCurrency);
}//amount, playFabId, virtualCurrency
function UnlockContainerInstance(containerItemInstanceId, playFabId)
{
    var UnlockContainerInstance = server.UnlockContainerInstance(
    {
        ContainerItemInstanceId: containerItemInstanceId,
        PlayFabId: playFabId
    });
    return(UnlockContainerInstance);
}//containerItemInstanceId, playFabId
function UnlockContainerInstance(containerItemInstanceId, playFabId, catalogVersion)
{
    var UnlockContainerInstance = server.UnlockContainerInstance(
    {
        ContainerItemInstanceId: containerItemInstanceId,
        PlayFabId: playFabId,
        CatalogVersion: catalogVersion
    });
    return(UnlockContainerInstance);
}//containerItemInstanceId, playFabId, catalogVersion
function UnlockContainerInstance(containerItemInstanceId, playFabId, catalogVersion, characterId)
{
    var UnlockContainerInstance = server.UnlockContainerInstance(
    {
        ContainerItemInstanceId: containerItemInstanceId,
        PlayFabId: playFabId,
        CatalogVersion: catalogVersion,
        CharacterId: characterId
    });
    return(UnlockContainerInstance);
}//containerItemInstanceId, playFabId, catalogVersion, characterId
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
}//containerItemInstanceId, playFabId, catalogVersion, characterId, keyItemInstanceId
function UnlockContainerItem(containerItemId, playFabId)
{
    var UnlockContainerItem = server.UnlockContainerItem(
    {
        ContainerItemId: containerItemId,
        PlayFabId: playFabId
    });
    return(UnlockContainerItem);
}//containerItemId, playFabId
function UnlockContainerItem(containerItemId, playFabId, catalogVersion)
{
    var UnlockContainerItem = server.UnlockContainerItem(
    {
        ContainerItemId: containerItemId,
        PlayFabId: playFabId,
        CatalogVersion: catalogVersion
    });
    return(UnlockContainerItem);
}//containerItemId, playFabId, catalogVersion
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
}//containerItemId, playFabId, catalogVersion, characterId
function UpdateUserInventoryItemCustomData(itemInstanceId, playFabId)
{
    var UpdateUserInventoryItemCustomData = server.UpdateUserInventoryItemCustomData(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId
    });
    return(UpdateUserInventoryItemCustomData);
}//itemInstanceId, playFabId
function UpdateUserInventoryItemCustomData(itemInstanceId, playFabId, characterId)
{
    var UpdateUserInventoryItemCustomData = server.UpdateUserInventoryItemCustomData(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId,
        CharacterId: characterId
    });
    return(UpdateUserInventoryItemCustomData);
}//itemInstanceId, playFabId, characterId
function UpdateUserInventoryItemCustomData(itemInstanceId, playFabId, characterId, data)
{
    var UpdateUserInventoryItemCustomData = server.UpdateUserInventoryItemCustomData(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: playFabId,
        CharacterId: characterId,
        Data: data
    });
    return(UpdateUserInventoryItemCustomData);
}//itemInstanceId, playFabId, characterId, data
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
}//itemInstanceId, playFabId, characterId, data, keysToRemove
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Server-Side Cloud Script
//-------------------------------------------------------------------------------------------------------------------------------
function ExecuteCloudScript(functionName, playFabId)
{
    var ExecuteCloudScript = server.ExecuteCloudScript(
    {
        FunctionName: functionName,
        PlayFabId: playFabId
    });
    return(ExecuteCloudScript);
}//functionName, playFabId
function ExecuteCloudScript(functionName, playFabId, functionParameter)
{
    var ExecuteCloudScript = server.ExecuteCloudScript(
    {
        FunctionName: functionName,
        PlayFabId: playFabId,
        FunctionParameter: functionParameter
    });
    return(ExecuteCloudScript);
}//functionName, playFabId, functionParameter
function ExecuteCloudScript(functionName, playFabId, functionParameter, generatePlayStreamEvent)
{
    var ExecuteCloudScript = server.ExecuteCloudScript(
    {
        FunctionName: functionName,
        PlayFabId: playFabId,
        FunctionParameter: functionParameter,
        GeneratePlayStreamEvent: generatePlayStreamEvent
    });
    return(ExecuteCloudScript);
}//functionName, playFabId, functionParameter, generatePlayStreamEvent
function ExecuteCloudScript(functionName, playFabId, functionParameter, generatePlayStreamEvent, revisionSelection)
{
    var ExecuteCloudScript = server.ExecuteCloudScript(
    {
        FunctionName: functionName,
        PlayFabId: playFabId,
        FunctionParameter: functionParameter,
        GeneratePlayStreamEvent: generatePlayStreamEvent,
        RevisionSelection: revisionSelection
    });
    return(ExecuteCloudScript);
}//functionName, playFabId, functionParameter, generatePlayStreamEvent, revisionSelection
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
}//functionName, playFabId, functionParameter, generatePlayStreamEvent, revisionSelection, specificRevision
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Shared Group Data
//-------------------------------------------------------------------------------------------------------------------------------
function AddSharedGroupMembers(playFabIds, sharedGroupId)
{
    var AddSharedGroupMembers = server.AddSharedGroupMembers(
    {
        PlayFabIds: playFabIds,
        SharedGroupId: sharedGroupId
    });
    return(AddSharedGroupMembers);
}//playFabIds, sharedGroupId
function CreateSharedGroup()
{
    var CreateSharedGroup = server.CreateSharedGroup(
    {
    });
    return(CreateSharedGroup);
}//
function CreateSharedGroup(sharedGroupId)
{
    var CreateSharedGroup = server.CreateSharedGroup(
    {
        SharedGroupId: sharedGroupId
    });
    return(CreateSharedGroup);
}//sharedGroupId
function DeleteSharedGroup(sharedGroupId)
{
    var DeleteSharedGroup = server.DeleteSharedGroup(
    {
        SharedGroupId: sharedGroupId
    });
    return(DeleteSharedGroup);
}//sharedGroupId
function GetSharedGroupData(sharedGroupId)
{
    var GetSharedGroupData = server.GetSharedGroupData(
    {
        SharedGroupId: sharedGroupId
    });
    return(GetSharedGroupData);
}//sharedGroupId
function GetSharedGroupData(sharedGroupId, getMembers)
{
    var GetSharedGroupData = server.GetSharedGroupData(
    {
        SharedGroupId: sharedGroupId,
        GetMembers: getMembers
    });
    return(GetSharedGroupData);
}//sharedGroupId, getMembers
function GetSharedGroupData(sharedGroupId, getMembers, keys)
{
    var GetSharedGroupData = server.GetSharedGroupData(
    {
        SharedGroupId: sharedGroupId,
        GetMembers: getMembers,
        Keys: keys
    });
    return(GetSharedGroupData);
}//sharedGroupId, getMembers, keys
function RemoveSharedGroupMembers(playFabIds, sharedGroupId)
{
    var RemoveSharedGroupMembers = server.RemoveSharedGroupMembers(
    {
        PlayFabIds: playFabIds,
        SharedGroupId: sharedGroupId
    });
    return(RemoveSharedGroupMembers);
}//playFabIds, sharedGroupId
function UpdateSharedGroupData(sharedGroupId)
{
    var UpdateSharedGroupData = server.UpdateSharedGroupData(
    {
        SharedGroupId: sharedGroupId
    });
    return(UpdateSharedGroupData);
}//sharedGroupId
function UpdateSharedGroupData(sharedGroupId, data)
{
    var UpdateSharedGroupData = server.UpdateSharedGroupData(
    {
        SharedGroupId: sharedGroupId,
        Data: data
    });
    return(UpdateSharedGroupData);
}//sharedGroupId, data
function UpdateSharedGroupData(sharedGroupId, data, keysToRemove)
{
    var UpdateSharedGroupData = server.UpdateSharedGroupData(
    {
        SharedGroupId: sharedGroupId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateSharedGroupData);
}//sharedGroupId, data, keysToRemove
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
}//sharedGroupId, data, keysToRemove, permission
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILLA PLAYFAB - Title-Wide Data Management
//-------------------------------------------------------------------------------------------------------------------------------
function GetCatalogItems()
{
    var GetCatalogItems = server.GetCatalogItems(
    {
    });
    return(GetCatalogItems);
}//
function GetCatalogItems(catalogVersion)
{
    var GetCatalogItems = server.GetCatalogItems(
    {
        CatalogVersion: catalogVersion
    });
    return(GetCatalogItems);
}//catalogVersion
function GetPublisherData(keys)
{
    var GetPublisherData = server.GetPublisherData(
    {
        Keys: keys
    });
    return(GetPublisherData);
}//keys
function GetStoreItems(storeId)
{
    var GetStoreItems = server.GetStoreItems(
    {
        StoreId: storeId
    });
    return(GetStoreItems);
}//storeId
function GetStoreItems(storeId, catalogVersion)
{
    var GetStoreItems = server.GetStoreItems(
    {
        StoreId: storeId,
        CatalogVersion: catalogVersion
    });
    return(GetStoreItems);
}//storeId, catalogVersion
function GetStoreItems(storeId, catalogVersion, playFabId)
{
    var GetStoreItems = server.GetStoreItems(
    {
        StoreId: storeId,
        CatalogVersion: catalogVersion,
        PlayFabId: playFabId
    });
    return(GetStoreItems);
}//storeId, catalogVersion, playFabId
function GetTime()
{
    var GetTime = server.GetTime(
    {
    });
    return(GetTime);
}//
function GetTitleData(keys)
{
    var GetTitleData = server.GetTitleData(
    {
        Keys: keys
    });
    return(GetTitleData);
}//keys
function GetTitleData(keys, overrideLabel)
{
    var GetTitleData = server.GetTitleData(
    {
        Keys: keys,
        OverrideLabel: overrideLabel
    });
    return(GetTitleData);
}//keys, overrideLabel
function GetTitleInternalData(keys)
{
    var GetTitleInternalData = server.GetTitleInternalData(
    {
        Keys: keys
    });
    return(GetTitleInternalData);
}//keys
function GetTitleInternalData(keys, overrideLabel)
{
    var GetTitleInternalData = server.GetTitleInternalData(
    {
        Keys: keys,
        OverrideLabel: overrideLabel
    });
    return(GetTitleInternalData);
}//keys, overrideLabel
function GetTitleNews()
{
    var GetTitleNews = server.GetTitleNews(
    {
    });
    return(GetTitleNews);
}//
function GetTitleNews(count)
{
    var GetTitleNews = server.GetTitleNews(
    {
        Count: count
    });
    return(GetTitleNews);
}//count
function SetPublisherData(key)
{
    var SetPublisherData = server.SetPublisherData(
    {
        Key: key
    });
    return(SetPublisherData);
}//key
function SetPublisherData(key, value)
{
    var SetPublisherData = server.SetPublisherData(
    {
        Key: key,
        Value: value
    });
    return(SetPublisherData);
}//key, value
function SetTitleData(key)
{
    var SetTitleData = server.SetTitleData(
    {
        Key: key
    });
    return(SetTitleData);
}//key
function SetTitleData(key, value)
{
    var SetTitleData = server.SetTitleData(
    {
        Key: key,
        Value: value
    });
    return(SetTitleData);
}//key, value
function SetTitleInternalData(key)
{
    var SetTitleInternalData = server.SetTitleInternalData(
    {
        Key: key
    });
    return(SetTitleInternalData);
}//key
function SetTitleInternalData(key, value)
{
    var SetTitleInternalData = server.SetTitleInternalData(
    {
        Key: key,
        Value: value
    });
    return(SetTitleInternalData);
}//key, value
//-------------------------------------------------------------------------------------------------------------------------------
//                                                                      END
//-------------------------------------------------------------------------------------------------------------------------------
