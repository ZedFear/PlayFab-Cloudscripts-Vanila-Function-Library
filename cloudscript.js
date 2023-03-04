//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILA PLAYFAB - Account Management
//-------------------------------------------------------------------------------------------------------------------------------
function AddGenericID(context, genericId)
{
    var AddGenericID = server.AddGenericID(
    {
        GenericId: genericId,
        PlayFabId: currentPlayerId
    });
    return(AddGenericID);
}//context, genericId
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
//                                                         VANILA PLAYFAB - Analytics
//-------------------------------------------------------------------------------------------------------------------------------
function WriteCharacterEvent(context, characterId, eventName)
{
    var WriteCharacterEvent = server.WriteCharacterEvent(
    {
        CharacterId: characterId,
        EventName: eventName,
        PlayFabId: currentPlayerId
    });
    return(WriteCharacterEvent);
}//context, characterId, eventName
function WriteCharacterEvent(context, characterId, eventName, body)
{
    var WriteCharacterEvent = server.WriteCharacterEvent(
    {
        CharacterId: characterId,
        EventName: eventName,
        PlayFabId: currentPlayerId,
        Body: body
    });
    return(WriteCharacterEvent);
}//context, characterId, eventName, body
function WriteCharacterEvent(context, characterId, eventName, body, timestamp)
{
    var WriteCharacterEvent = server.WriteCharacterEvent(
    {
        CharacterId: characterId,
        EventName: eventName,
        PlayFabId: currentPlayerId,
        Body: body,
        Timestamp: timestamp
    });
    return(WriteCharacterEvent);
}//context, characterId, eventName, body, timestamp
function WritePlayerEvent(context, eventName)
{
    var WritePlayerEvent = server.WritePlayerEvent(
    {
        EventName: eventName,
        PlayFabId: currentPlayerId
    });
    return(WritePlayerEvent);
}//context, eventName
function WritePlayerEvent(context, eventName, body)
{
    var WritePlayerEvent = server.WritePlayerEvent(
    {
        EventName: eventName,
        PlayFabId: currentPlayerId,
        Body: body
    });
    return(WritePlayerEvent);
}//context, eventName, body
function WritePlayerEvent(context, eventName, body, timestamp)
{
    var WritePlayerEvent = server.WritePlayerEvent(
    {
        EventName: eventName,
        PlayFabId: currentPlayerId,
        Body: body,
        Timestamp: timestamp
    });
    return(WritePlayerEvent);
}//context, eventName, body, timestamp
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
//                                                         VANILA PLAYFAB - Authentication
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
function SetPlayerSecret(context)
{
    var SetPlayerSecret = server.SetPlayerSecret(
    {
        PlayFabId: currentPlayerId
    });
    return(SetPlayerSecret);
}//context
function SetPlayerSecret(context, playerSecret)
{
    var SetPlayerSecret = server.SetPlayerSecret(
    {
        PlayFabId: currentPlayerId,
        PlayerSecret: playerSecret
    });
    return(SetPlayerSecret);
}//context, playerSecret
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILA PLAYFAB - Character Data
//-------------------------------------------------------------------------------------------------------------------------------
function GetCharacterData(context, characterId)
{
    var GetCharacterData = server.GetCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId
    });
    return(GetCharacterData);
}//context, characterId
function GetCharacterData(context, characterId, ifChangedFromDataVersion)
{
    var GetCharacterData = server.GetCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetCharacterData);
}//context, characterId, ifChangedFromDataVersion
function GetCharacterData(context, characterId, ifChangedFromDataVersion, keys)
{
    var GetCharacterData = server.GetCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetCharacterData);
}//context, characterId, ifChangedFromDataVersion, keys
function GetCharacterInternalData(context, characterId)
{
    var GetCharacterInternalData = server.GetCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId
    });
    return(GetCharacterInternalData);
}//context, characterId
function GetCharacterInternalData(context, characterId, ifChangedFromDataVersion)
{
    var GetCharacterInternalData = server.GetCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetCharacterInternalData);
}//context, characterId, ifChangedFromDataVersion
function GetCharacterInternalData(context, characterId, ifChangedFromDataVersion, keys)
{
    var GetCharacterInternalData = server.GetCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetCharacterInternalData);
}//context, characterId, ifChangedFromDataVersion, keys
function GetCharacterReadOnlyData(context, characterId)
{
    var GetCharacterReadOnlyData = server.GetCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId
    });
    return(GetCharacterReadOnlyData);
}//context, characterId
function GetCharacterReadOnlyData(context, characterId, ifChangedFromDataVersion)
{
    var GetCharacterReadOnlyData = server.GetCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetCharacterReadOnlyData);
}//context, characterId, ifChangedFromDataVersion
function GetCharacterReadOnlyData(context, characterId, ifChangedFromDataVersion, keys)
{
    var GetCharacterReadOnlyData = server.GetCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetCharacterReadOnlyData);
}//context, characterId, ifChangedFromDataVersion, keys
function UpdateCharacterData(context, characterId)
{
    var UpdateCharacterData = server.UpdateCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId
    });
    return(UpdateCharacterData);
}//context, characterId
function UpdateCharacterData(context, characterId, data)
{
    var UpdateCharacterData = server.UpdateCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        Data: data
    });
    return(UpdateCharacterData);
}//context, characterId, data
function UpdateCharacterData(context, characterId, data, keysToRemove)
{
    var UpdateCharacterData = server.UpdateCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateCharacterData);
}//context, characterId, data, keysToRemove
function UpdateCharacterData(context, characterId, data, keysToRemove, permission)
{
    var UpdateCharacterData = server.UpdateCharacterData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateCharacterData);
}//context, characterId, data, keysToRemove, permission
function UpdateCharacterInternalData(context, characterId)
{
    var UpdateCharacterInternalData = server.UpdateCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId
    });
    return(UpdateCharacterInternalData);
}//context, characterId
function UpdateCharacterInternalData(context, characterId, data)
{
    var UpdateCharacterInternalData = server.UpdateCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        Data: data
    });
    return(UpdateCharacterInternalData);
}//context, characterId, data
function UpdateCharacterInternalData(context, characterId, data, keysToRemove)
{
    var UpdateCharacterInternalData = server.UpdateCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateCharacterInternalData);
}//context, characterId, data, keysToRemove
function UpdateCharacterInternalData(context, characterId, data, keysToRemove, permission)
{
    var UpdateCharacterInternalData = server.UpdateCharacterInternalData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateCharacterInternalData);
}//context, characterId, data, keysToRemove, permission
function UpdateCharacterReadOnlyData(context, characterId)
{
    var UpdateCharacterReadOnlyData = server.UpdateCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId
    });
    return(UpdateCharacterReadOnlyData);
}//context, characterId
function UpdateCharacterReadOnlyData(context, characterId, data)
{
    var UpdateCharacterReadOnlyData = server.UpdateCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        Data: data
    });
    return(UpdateCharacterReadOnlyData);
}//context, characterId, data
function UpdateCharacterReadOnlyData(context, characterId, data, keysToRemove)
{
    var UpdateCharacterReadOnlyData = server.UpdateCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateCharacterReadOnlyData);
}//context, characterId, data, keysToRemove
function UpdateCharacterReadOnlyData(context, characterId, data, keysToRemove, permission)
{
    var UpdateCharacterReadOnlyData = server.UpdateCharacterReadOnlyData(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateCharacterReadOnlyData);
}//context, characterId, data, keysToRemove, permission
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILA PLAYFAB - Characters
//-------------------------------------------------------------------------------------------------------------------------------
function DeleteCharacterFromUser(context, characterId, saveCharacterInventory)
{
    var DeleteCharacterFromUser = server.DeleteCharacterFromUser(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        SaveCharacterInventory: saveCharacterInventory
    });
    return(DeleteCharacterFromUser);
}//context, characterId, saveCharacterInventory
function GetAllUsersCharacters(context)
{
    var GetAllUsersCharacters = server.GetAllUsersCharacters(
    {
        PlayFabId: currentPlayerId
    });
    return(GetAllUsersCharacters);
}//context
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
function GetCharacterStatistics(context, characterId)
{
    var GetCharacterStatistics = server.GetCharacterStatistics(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId
    });
    return(GetCharacterStatistics);
}//context, characterId
function GetLeaderboardAroundCharacter(context, characterId, maxResultsCount, statisticName)
{
    var GetLeaderboardAroundCharacter = server.GetLeaderboardAroundCharacter(
    {
        CharacterId: characterId,
        MaxResultsCount: maxResultsCount,
        PlayFabId: currentPlayerId,
        StatisticName: statisticName
    });
    return(GetLeaderboardAroundCharacter);
}//context, characterId, maxResultsCount, statisticName
function GetLeaderboardForUserCharacters(context, statisticName)
{
    var GetLeaderboardForUserCharacters = server.GetLeaderboardForUserCharacters(
    {
        PlayFabId: currentPlayerId,
        StatisticName: statisticName
    });
    return(GetLeaderboardForUserCharacters);
}//context, statisticName
function GrantCharacterToUser(context, characterName, characterType)
{
    var GrantCharacterToUser = server.GrantCharacterToUser(
    {
        CharacterName: characterName,
        CharacterType: characterType,
        PlayFabId: currentPlayerId
    });
    return(GrantCharacterToUser);
}//context, characterName, characterType
function UpdateCharacterStatistics(context, characterId)
{
    var UpdateCharacterStatistics = server.UpdateCharacterStatistics(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId
    });
    return(UpdateCharacterStatistics);
}//context, characterId
function UpdateCharacterStatistics(context, characterId, characterStatistics)
{
    var UpdateCharacterStatistics = server.UpdateCharacterStatistics(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        CharacterStatistics: characterStatistics
    });
    return(UpdateCharacterStatistics);
}//context, characterId, characterStatistics
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILA PLAYFAB - Content
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
//                                                         VANILA PLAYFAB - Friend List Management
//-------------------------------------------------------------------------------------------------------------------------------
function AddFriend(context, friendEmail)
{
    var AddFriend = server.AddFriend(
    {
        PlayFabId: currentPlayerId,
        FriendEmail: friendEmail
    });
    return(AddFriend);
}//context, friendEmail
function AddFriend(context, friendPlayFabId)
{
    var AddFriend = server.AddFriend(
    {
        PlayFabId: currentPlayerId,
        FriendPlayFabId: friendPlayFabId
    });
    return(AddFriend);
}//context, friendPlayFabId
function AddFriend(context, friendTitleDisplayName)
{
    var AddFriend = server.AddFriend(
    {
        PlayFabId: currentPlayerId,
        FriendTitleDisplayName: friendTitleDisplayName
    });
    return(AddFriend);
}//context, friendTitleDisplayName
function AddFriend(context, friendUsername)
{
    var AddFriend = server.AddFriend(
    {
        PlayFabId: currentPlayerId,
        FriendUsername: friendUsername
    });
    return(AddFriend);
}//context, friendUsername
function GetFriendsList(context)
{
    var GetFriendsList = server.GetFriendsList(
    {
        PlayFabId: currentPlayerId
    });
    return(GetFriendsList);
}//context
function GetFriendsList(context, externalPlatformFriends)
{
    var GetFriendsList = server.GetFriendsList(
    {
        PlayFabId: currentPlayerId,
        ExternalPlatformFriends: externalPlatformFriends
    });
    return(GetFriendsList);
}//context, externalPlatformFriends
function GetFriendsList(context, externalPlatformFriends, profileConstraints)
{
    var GetFriendsList = server.GetFriendsList(
    {
        PlayFabId: currentPlayerId,
        ExternalPlatformFriends: externalPlatformFriends,
        ProfileConstraints: profileConstraints
    });
    return(GetFriendsList);
}//context, externalPlatformFriends, profileConstraints
function GetFriendsList(context, externalPlatformFriends, profileConstraints, xboxToken)
{
    var GetFriendsList = server.GetFriendsList(
    {
        PlayFabId: currentPlayerId,
        ExternalPlatformFriends: externalPlatformFriends,
        ProfileConstraints: profileConstraints,
        XboxToken: xboxToken
    });
    return(GetFriendsList);
}//context, externalPlatformFriends, profileConstraints, xboxToken
function RemoveFriend(context, friendPlayFabId)
{
    var RemoveFriend = server.RemoveFriend(
    {
        FriendPlayFabId: friendPlayFabId,
        PlayFabId: currentPlayerId
    });
    return(RemoveFriend);
}//context, friendPlayFabId
function SetFriendTags(context, friendPlayFabId, tags)
{
    var SetFriendTags = server.SetFriendTags(
    {
        FriendPlayFabId: friendPlayFabId,
        PlayFabId: currentPlayerId,
        Tags: tags
    });
    return(SetFriendTags);
}//context, friendPlayFabId, tags
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILA PLAYFAB - Matchmaking
//-------------------------------------------------------------------------------------------------------------------------------
function DeregisterGame(lobbyId)
{
    var DeregisterGame = server.DeregisterGame(
    {
        LobbyId: lobbyId
    });
    return(DeregisterGame);
}//lobbyId
function NotifyMatchmakerPlayerLeft(context, lobbyId)
{
    var NotifyMatchmakerPlayerLeft = server.NotifyMatchmakerPlayerLeft(
    {
        LobbyId: lobbyId,
        PlayFabId: currentPlayerId
    });
    return(NotifyMatchmakerPlayerLeft);
}//context, lobbyId
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
//                                                         VANILA PLAYFAB - Platform Specific Methods
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
//                                                         VANILA PLAYFAB - Play Stream
//-------------------------------------------------------------------------------------------------------------------------------
function AddPlayerTag(context, tagName)
{
    var AddPlayerTag = server.AddPlayerTag(
    {
        PlayFabId: currentPlayerId,
        TagName: tagName
    });
    return(AddPlayerTag);
}//context, tagName
function GetAllSegments()
{
    var GetAllSegments = server.GetAllSegments({});
    return(GetAllSegments);
}//
function GetPlayerSegments(context)
{
    var GetPlayerSegments = server.GetPlayerSegments(
    {
        PlayFabId: currentPlayerId
    });
    return(GetPlayerSegments);
}//context
function GetPlayerTags(context)
{
    var GetPlayerTags = server.GetPlayerTags(
    {
        PlayFabId: currentPlayerId
    });
    return(GetPlayerTags);
}//context
function GetPlayerTags(context, namespace)
{
    var GetPlayerTags = server.GetPlayerTags(
    {
        PlayFabId: currentPlayerId,
        Namespace: namespace
    });
    return(GetPlayerTags);
}//context, namespace
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
function RemovePlayerTag(context, tagName)
{
    var RemovePlayerTag = server.RemovePlayerTag(
    {
        PlayFabId: currentPlayerId,
        TagName: tagName
    });
    return(RemovePlayerTag);
}//context, tagName
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILA PLAYFAB - Player Data Management
//-------------------------------------------------------------------------------------------------------------------------------
function GetFriendLeaderboard(context, maxResultsCount, startPosition, statisticName)
{
    var GetFriendLeaderboard = server.GetFriendLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: currentPlayerId,
        StartPosition: startPosition,
        StatisticName: statisticName
    });
    return(GetFriendLeaderboard);
}//context, maxResultsCount, startPosition, statisticName
function GetFriendLeaderboard(context, maxResultsCount, startPosition, statisticName, externalPlatformFriends)
{
    var GetFriendLeaderboard = server.GetFriendLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: currentPlayerId,
        StartPosition: startPosition,
        StatisticName: statisticName,
        ExternalPlatformFriends: externalPlatformFriends
    });
    return(GetFriendLeaderboard);
}//context, maxResultsCount, startPosition, statisticName, externalPlatformFriends
function GetFriendLeaderboard(context, maxResultsCount, startPosition, statisticName, externalPlatformFriends, profileConstraints)
{
    var GetFriendLeaderboard = server.GetFriendLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: currentPlayerId,
        StartPosition: startPosition,
        StatisticName: statisticName,
        ExternalPlatformFriends: externalPlatformFriends,
        ProfileConstraints: profileConstraints
    });
    return(GetFriendLeaderboard);
}//context, maxResultsCount, startPosition, statisticName, externalPlatformFriends, profileConstraints
function GetFriendLeaderboard(context, maxResultsCount, startPosition, statisticName, externalPlatformFriends, profileConstraints, version)
{
    var GetFriendLeaderboard = server.GetFriendLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: currentPlayerId,
        StartPosition: startPosition,
        StatisticName: statisticName,
        ExternalPlatformFriends: externalPlatformFriends,
        ProfileConstraints: profileConstraints,
        UseSpecificVersion: true,
        Version: version
    });
    return(GetFriendLeaderboard);
}//context, maxResultsCount, startPosition, statisticName, externalPlatformFriends, profileConstraints, version
function GetFriendLeaderboard(context, maxResultsCount, startPosition, statisticName, externalPlatformFriends, profileConstraints, version, xboxToken)
{
    var GetFriendLeaderboard = server.GetFriendLeaderboard(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: currentPlayerId,
        StartPosition: startPosition,
        StatisticName: statisticName,
        ExternalPlatformFriends: externalPlatformFriends,
        ProfileConstraints: profileConstraints,
        UseSpecificVersion: true,
        Version: version,
        XboxToken: xboxToken
    });
    return(GetFriendLeaderboard);
}//context, maxResultsCount, startPosition, statisticName, externalPlatformFriends, profileConstraints, version, xboxToken
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
function GetLeaderboardAroundUser(context, maxResultsCount, statisticName)
{
    var GetLeaderboardAroundUser = server.GetLeaderboardAroundUser(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: currentPlayerId,
        StatisticName: statisticName
    });
    return(GetLeaderboardAroundUser);
}//context, maxResultsCount, statisticName
function GetLeaderboardAroundUser(context, maxResultsCount, statisticName, profileConstraints)
{
    var GetLeaderboardAroundUser = server.GetLeaderboardAroundUser(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: currentPlayerId,
        StatisticName: statisticName,
        ProfileConstraints: profileConstraints
    });
    return(GetLeaderboardAroundUser);
}//context, maxResultsCount, statisticName, profileConstraints
function GetLeaderboardAroundUser(context, maxResultsCount, statisticName, profileConstraints, version)
{
    var GetLeaderboardAroundUser = server.GetLeaderboardAroundUser(
    {
        MaxResultsCount: maxResultsCount,
        PlayFabId: currentPlayerId,
        StatisticName: statisticName,
        ProfileConstraints: profileConstraints,
        UseSpecificVersion: true,
        Version: version
    });
    return(GetLeaderboardAroundUser);
}//context, maxResultsCount, statisticName, profileConstraints, version
function GetPlayerCombinedInfo(context, infoRequestParameters)
{
    var GetPlayerCombinedInfo = server.GetPlayerCombinedInfo(
    {
        InfoRequestParameters: infoRequestParameters,
        PlayFabId: currentPlayerId
    });
    return(GetPlayerCombinedInfo);
}//context, infoRequestParameters
function GetPlayerStatisticVersions(statisticName)
{
    var GetPlayerStatisticVersions = server.GetPlayerStatisticVersions(
    {
        StatisticName: statisticName
    });
    return(GetPlayerStatisticVersions);
}//statisticName
function GetPlayerStatistics(context)
{
    var GetPlayerStatistics = server.GetPlayerStatistics(
    {
        PlayFabId: currentPlayerId
    });
    return(GetPlayerStatistics);
}//context
function GetPlayerStatistics(context, statisticNameVersions)
{
    var GetPlayerStatistics = server.GetPlayerStatistics(
    {
        PlayFabId: currentPlayerId,
        StatisticNameVersions: statisticNameVersions
    });
    return(GetPlayerStatistics);
}//context, statisticNameVersions
function GetPlayerStatistics(context, statisticNameVersions, statisticNames)
{
    var GetPlayerStatistics = server.GetPlayerStatistics(
    {
        PlayFabId: currentPlayerId,
        StatisticNameVersions: statisticNameVersions,
        StatisticNames: statisticNames
    });
    return(GetPlayerStatistics);
}//context, statisticNameVersions, statisticNames
function GetUserData(context)
{
    var GetUserData = server.GetUserData(
    {
        PlayFabId: currentPlayerId
    });
    return(GetUserData);
}//context
function GetUserData(context, ifChangedFromDataVersion)
{
    var GetUserData = server.GetUserData(
    {
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetUserData);
}//context, ifChangedFromDataVersion
function GetUserData(context, ifChangedFromDataVersion, keys)
{
    var GetUserData = server.GetUserData(
    {
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserData);
}//context, ifChangedFromDataVersion, keys
function GetUserInternalData(context)
{
    var GetUserInternalData = server.GetUserInternalData(
    {
        PlayFabId: currentPlayerId
    });
    return(GetUserInternalData);
}//context
function GetUserInternalData(context, ifChangedFromDataVersion)
{
    var GetUserInternalData = server.GetUserInternalData(
    {
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetUserInternalData);
}//context, ifChangedFromDataVersion
function GetUserInternalData(context, ifChangedFromDataVersion, keys)
{
    var GetUserInternalData = server.GetUserInternalData(
    {
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserInternalData);
}//context, ifChangedFromDataVersion, keys
function GetUserPublisherData(context)
{
    var GetUserPublisherData = server.GetUserPublisherData(
    {
        PlayFabId: currentPlayerId
    });
    return(GetUserPublisherData);
}//context
function GetUserPublisherData(context, ifChangedFromDataVersion)
{
    var GetUserPublisherData = server.GetUserPublisherData(
    {
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetUserPublisherData);
}//context, ifChangedFromDataVersion
function GetUserPublisherData(context, ifChangedFromDataVersion, keys)
{
    var GetUserPublisherData = server.GetUserPublisherData(
    {
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserPublisherData);
}//context, ifChangedFromDataVersion, keys
function GetUserPublisherInternalData(context)
{
    var GetUserPublisherInternalData = server.GetUserPublisherInternalData(
    {
        PlayFabId: currentPlayerId
    });
    return(GetUserPublisherInternalData);
}//context
function GetUserPublisherInternalData(context, ifChangedFromDataVersion)
{
    var GetUserPublisherInternalData = server.GetUserPublisherInternalData(
    {
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetUserPublisherInternalData);
}//context, ifChangedFromDataVersion
function GetUserPublisherInternalData(context, ifChangedFromDataVersion, keys)
{
    var GetUserPublisherInternalData = server.GetUserPublisherInternalData(
    {
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserPublisherInternalData);
}//context, ifChangedFromDataVersion, keys
function GetUserPublisherReadOnlyData(context)
{
    var GetUserPublisherReadOnlyData = server.GetUserPublisherReadOnlyData(
    {
        PlayFabId: currentPlayerId
    });
    return(GetUserPublisherReadOnlyData);
}//context
function GetUserPublisherReadOnlyData(context, ifChangedFromDataVersion)
{
    var GetUserPublisherReadOnlyData = server.GetUserPublisherReadOnlyData(
    {
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetUserPublisherReadOnlyData);
}//context, ifChangedFromDataVersion
function GetUserPublisherReadOnlyData(context, ifChangedFromDataVersion, keys)
{
    var GetUserPublisherReadOnlyData = server.GetUserPublisherReadOnlyData(
    {
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserPublisherReadOnlyData);
}//context, ifChangedFromDataVersion, keys
function GetUserReadOnlyData(context)
{
    var GetUserReadOnlyData = server.GetUserReadOnlyData(
    {
        PlayFabId: currentPlayerId
    });
    return(GetUserReadOnlyData);
}//context
function GetUserReadOnlyData(context, ifChangedFromDataVersion)
{
    var GetUserReadOnlyData = server.GetUserReadOnlyData(
    {
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion
    });
    return(GetUserReadOnlyData);
}//context, ifChangedFromDataVersion
function GetUserReadOnlyData(context, ifChangedFromDataVersion, keys)
{
    var GetUserReadOnlyData = server.GetUserReadOnlyData(
    {
        PlayFabId: currentPlayerId,
        IfChangedFromDataVersion: ifChangedFromDataVersion,
        Keys: keys
    });
    return(GetUserReadOnlyData);
}//context, ifChangedFromDataVersion, keys
function UpdatePlayerStatistics(context, statistics)
{
    var UpdatePlayerStatistics = server.UpdatePlayerStatistics(
    {
        PlayFabId: currentPlayerId,
        Statistics: statistics
    });
    return(UpdatePlayerStatistics);
}//context, statistics
function UpdatePlayerStatistics(context, statistics, forceUpdate)
{
    var UpdatePlayerStatistics = server.UpdatePlayerStatistics(
    {
        PlayFabId: currentPlayerId,
        Statistics: statistics,
        ForceUpdate: forceUpdate
    });
    return(UpdatePlayerStatistics);
}//context, statistics, forceUpdate
function UpdateUserData(context, data)
{
    var UpdateUserData = server.UpdateUserData(
    {
        PlayFabId: currentPlayerId,
        Data: data
    });
    return(UpdateUserData);
}//context, data
function UpdateUserData(context, data, keysToRemove)
{
    var UpdateUserData = server.UpdateUserData(
    {
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserData);
}//context, data, keysToRemove
function UpdateUserData(context, data, keysToRemove, permission)
{
    var UpdateUserData = server.UpdateUserData(
    {
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateUserData);
}//context, data, keysToRemove, permission
function UpdateUserInternalData(context, data)
{
    var UpdateUserInternalData = server.UpdateUserInternalData(
    {
        PlayFabId: currentPlayerId,
        Data: data
    });
    return(UpdateUserInternalData);
}//context, data
function UpdateUserInternalData(context, data, keysToRemove)
{
    var UpdateUserInternalData = server.UpdateUserInternalData(
    {
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserInternalData);
}//context, data, keysToRemove
function UpdateUserPublisherData(context, data)
{
    var UpdateUserPublisherData = server.UpdateUserPublisherData(
    {
        PlayFabId: currentPlayerId,
        Data: data
    });
    return(UpdateUserPublisherData);
}//context, data
function UpdateUserPublisherData(context, data, keysToRemove)
{
    var UpdateUserPublisherData = server.UpdateUserPublisherData(
    {
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserPublisherData);
}//context, data, keysToRemove
function UpdateUserPublisherData(context, data, keysToRemove, permission)
{
    var UpdateUserPublisherData = server.UpdateUserPublisherData(
    {
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateUserPublisherData);
}//context, data, keysToRemove, permission
function UpdateUserPublisherInternalData(context, data)
{
    var UpdateUserPublisherInternalData = server.UpdateUserPublisherInternalData(
    {
        PlayFabId: currentPlayerId,
        Data: data
    });
    return(UpdateUserPublisherInternalData);
}//context, data
function UpdateUserPublisherInternalData(context, data, keysToRemove)
{
    var UpdateUserPublisherInternalData = server.UpdateUserPublisherInternalData(
    {
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserPublisherInternalData);
}//context, data, keysToRemove
function UpdateUserPublisherReadOnlyData(context, data)
{
    var UpdateUserPublisherReadOnlyData = server.UpdateUserPublisherReadOnlyData(
    {
        PlayFabId: currentPlayerId,
        Data: data
    });
    return(UpdateUserPublisherReadOnlyData);
}//context, data
function UpdateUserPublisherReadOnlyData(context, data, keysToRemove)
{
    var UpdateUserPublisherReadOnlyData = server.UpdateUserPublisherReadOnlyData(
    {
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserPublisherReadOnlyData);
}//context, data, keysToRemove
function UpdateUserPublisherReadOnlyData(context, data, keysToRemove, permission)
{
    var UpdateUserPublisherReadOnlyData = server.UpdateUserPublisherReadOnlyData(
    {
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateUserPublisherReadOnlyData);
}//context, data, keysToRemove, permission
function UpdateUserReadOnlyData(context, data)
{
    var UpdateUserReadOnlyData = server.UpdateUserReadOnlyData(
    {
        PlayFabId: currentPlayerId,
        Data: data
    });
    return(UpdateUserReadOnlyData);
}//context, data
function UpdateUserReadOnlyData(context, data, keysToRemove)
{
    var UpdateUserReadOnlyData = server.UpdateUserReadOnlyData(
    {
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserReadOnlyData);
}//context, data, keysToRemove
function UpdateUserReadOnlyData(context, data, keysToRemove, permission)
{
    var UpdateUserReadOnlyData = server.UpdateUserReadOnlyData(
    {
        PlayFabId: currentPlayerId,
        Data: data,
        KeysToRemove: keysToRemove,
        Permission: permission
    });
    return(UpdateUserReadOnlyData);
}//context, data, keysToRemove, permission
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILA PLAYFAB - Player Item Management
//-------------------------------------------------------------------------------------------------------------------------------
function AddCharacterVirtualCurrency(context, amount, characterId, virtualCurrency)
{
    var AddCharacterVirtualCurrency = server.AddCharacterVirtualCurrency(
    {
        Amount: amount,
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        VirtualCurrency: virtualCurrency
    });
    return(AddCharacterVirtualCurrency);
}//context, amount, characterId, virtualCurrency
function AddUserVirtualCurrency(context, amount, virtualCurrency)
{
    var AddUserVirtualCurrency = server.AddUserVirtualCurrency(
    {
        Amount: amount,
        PlayFabId: currentPlayerId,
        VirtualCurrency: virtualCurrency
    });
    return(AddUserVirtualCurrency);
}//context, amount, virtualCurrency
function ConsumeItem(context, consumeCount, itemInstanceId)
{
    var ConsumeItem = server.ConsumeItem(
    {
        ConsumeCount: consumeCount,
        ItemInstanceId: itemInstanceId,
        PlayFabId: currentPlayerId
    });
    return(ConsumeItem);
}//context, consumeCount, itemInstanceId
function ConsumeItem(context, consumeCount, itemInstanceId, characterId)
{
    var ConsumeItem = server.ConsumeItem(
    {
        ConsumeCount: consumeCount,
        ItemInstanceId: itemInstanceId,
        PlayFabId: currentPlayerId,
        CharacterId: characterId
    });
    return(ConsumeItem);
}//context, consumeCount, itemInstanceId, characterId
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
function GetCharacterInventory(context, characterId)
{
    var GetCharacterInventory = server.GetCharacterInventory(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId
    });
    return(GetCharacterInventory);
}//context, characterId
function GetCharacterInventory(context, characterId, catalogVersion)
{
    var GetCharacterInventory = server.GetCharacterInventory(
    {
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        CatalogVersion: catalogVersion
    });
    return(GetCharacterInventory);
}//context, characterId, catalogVersion
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
function GetUserInventory(context)
{
	var GetUserInventory = server.GetUserInventory(
	{
		PlayFabId: currentPlayerId
	});
	return(GetUserInventory);
}//context
function GrantItemsToCharacter(context, characterId)
{
	var GrantItemsToCharacter = server.GrantItemsToCharacter(
	{
		CharacterId: characterId,
		PlayFabId: currentPlayerId
	});
	return(GrantItemsToCharacter);
}//context, characterId
function GrantItemsToCharacter(context, characterId, annotation)
{
	var GrantItemsToCharacter = server.GrantItemsToCharacter(
	{
		CharacterId: characterId,
		PlayFabId: currentPlayerId,
		Annotation: annotation
	});
	return(GrantItemsToCharacter);
}//context, characterId, annotation
function GrantItemsToCharacter(context, characterId, annotation, catalogVersion)
{
	var GrantItemsToCharacter = server.GrantItemsToCharacter(
	{
		CharacterId: characterId,
		PlayFabId: currentPlayerId,
		Annotation: annotation,
		CatalogVersion: catalogVersion
	});
	return(GrantItemsToCharacter);
}//context, characterId, annotation, catalogVersion
function GrantItemsToCharacter(context, characterId, annotation, catalogVersion, itemIds)
{
	var GrantItemsToCharacter = server.GrantItemsToCharacter(
	{
		CharacterId: characterId,
		PlayFabId: currentPlayerId,
		Annotation: annotation,
		CatalogVersion: catalogVersion,
		ItemIds: itemIds
	});
	return(GrantItemsToCharacter);
}//context, characterId, annotation, catalogVersion, itemIds
function GrantItemsToUser(context, itemIds)
{
    var GrantItemsToUser = server.GrantItemsToUser(
    {
        ItemIds: itemIds,
        PlayFabId: currentPlayerId
    });
    return(GrantItemsToUser);
}//context, itemIds
function GrantItemsToUser(context, itemIds, annotation)
{
    var GrantItemsToUser = server.GrantItemsToUser(
    {
        ItemIds: itemIds,
        PlayFabId: currentPlayerId,
        Annotation: annotation
    });
    return(GrantItemsToUser);
}//context, itemIds, annotation
function GrantItemsToUser(context, itemIds, annotation, catalogVersion)
{
    var GrantItemsToUser = server.GrantItemsToUser(
    {
        ItemIds: itemIds,
        PlayFabId: currentPlayerId,
        Annotation: annotation,
        CatalogVersion: catalogVersion
    });
    return(GrantItemsToUser);
}//context, itemIds, annotation, catalogVersion
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
function ModifyItemUses(context, itemInstanceId, usesToAdd)
{
    var ModifyItemUses = server.ModifyItemUses(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: currentPlayerId,
        UsesToAdd: usesToAdd
    });
    return(ModifyItemUses);
}//context, itemInstanceId, usesToAdd
function MoveItemToCharacterFromCharacter(context, givingCharacterId, itemInstanceId, receivingCharacterId)
{
    var MoveItemToCharacterFromCharacter = server.MoveItemToCharacterFromCharacter(
    {
        GivingCharacterId: givingCharacterId,
        ItemInstanceId: itemInstanceId,
        PlayFabId: currentPlayerId,
        ReceivingCharacterId: receivingCharacterId
    });
    return(MoveItemToCharacterFromCharacter);
}//context, givingCharacterId, itemInstanceId, receivingCharacterId
function MoveItemToCharacterFromUser(context, characterId, itemInstanceId)
{
    var MoveItemToCharacterFromUser = server.MoveItemToCharacterFromUser(
    {
        CharacterId: characterId,
        ItemInstanceId: itemInstanceId,
        PlayFabId: currentPlayerId
    });
    return(MoveItemToCharacterFromUser);
}//context, characterId, itemInstanceId
function MoveItemToUserFromCharacter(context, characterId, itemInstanceId)
{
    var MoveItemToUserFromCharacter = server.MoveItemToUserFromCharacter(
    {
        CharacterId: characterId,
        ItemInstanceId: itemInstanceId,
        PlayFabId: currentPlayerId
    });
    return(MoveItemToUserFromCharacter);
}//context, characterId, itemInstanceId
function RedeemCoupon(context, couponCode)
{
    var RedeemCoupon = server.RedeemCoupon(
    {
        CouponCode: couponCode,
        PlayFabId: currentPlayerId
    });
    return(RedeemCoupon);
}//context, couponCode
function RedeemCoupon(context, couponCode, catalogVersion)
{
    var RedeemCoupon = server.RedeemCoupon(
    {
        CouponCode: couponCode,
        PlayFabId: currentPlayerId,
        CatalogVersion: catalogVersion
    });
    return(RedeemCoupon);
}//context, couponCode, catalogVersion
function RedeemCoupon(context, couponCode, catalogVersion, characterId)
{
    var RedeemCoupon = server.RedeemCoupon(
    {
        CouponCode: couponCode,
        PlayFabId: currentPlayerId,
        CatalogVersion: catalogVersion,
        CharacterId: characterId
    });
    return(RedeemCoupon);
}//context, couponCode, catalogVersion, characterId
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
function RevokeInventoryItem(context, itemInstanceId)
{
    var RevokeInventoryItem = server.RevokeInventoryItem(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: currentPlayerId
    });
    return(RevokeInventoryItem);
}//context, itemInstanceId
function RevokeInventoryItem(context, itemInstanceId, characterId)
{
    var RevokeInventoryItem = server.RevokeInventoryItem(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: currentPlayerId,
        CharacterId: characterId
    });
    return(RevokeInventoryItem);
}//context, itemInstanceId, characterId
function RevokeInventoryItems(items)
{
    var RevokeInventoryItems = server.RevokeInventoryItems(
    {
        Items: items
    });
    return(RevokeInventoryItems);
}//items
function SubtractCharacterVirtualCurrency(context, amount, characterId, virtualCurrency)
{
    var SubtractCharacterVirtualCurrency = server.SubtractCharacterVirtualCurrency(
    {
        Amount: amount,
        CharacterId: characterId,
        PlayFabId: currentPlayerId,
        VirtualCurrency: virtualCurrency
    });
    return(SubtractCharacterVirtualCurrency);
}//context, amount, characterId, virtualCurrency
function SubtractUserVirtualCurrency(context, amount, virtualCurrency)
{
    var SubtractUserVirtualCurrency = server.SubtractUserVirtualCurrency(
    {
        Amount: amount,
        PlayFabId: currentPlayerId,
        VirtualCurrency: virtualCurrency
    });
    return(SubtractUserVirtualCurrency);
}//context, amount, virtualCurrency
function UnlockContainerInstance(context, containerItemInstanceId)
{
    var UnlockContainerInstance = server.UnlockContainerInstance(
    {
        ContainerItemInstanceId: containerItemInstanceId,
        PlayFabId: currentPlayerId
    });
    return(UnlockContainerInstance);
}//context, containerItemInstanceId
function UnlockContainerInstance(context, containerItemInstanceId, catalogVersion)
{
    var UnlockContainerInstance = server.UnlockContainerInstance(
    {
        ContainerItemInstanceId: containerItemInstanceId,
        PlayFabId: currentPlayerId,
        CatalogVersion: catalogVersion
    });
    return(UnlockContainerInstance);
}//context, containerItemInstanceId, catalogVersion
function UnlockContainerInstance(context, containerItemInstanceId, catalogVersion, characterId)
{
    var UnlockContainerInstance = server.UnlockContainerInstance(
    {
        ContainerItemInstanceId: containerItemInstanceId,
        PlayFabId: currentPlayerId,
        CatalogVersion: catalogVersion,
        CharacterId: characterId
    });
    return(UnlockContainerInstance);
}//context, containerItemInstanceId, catalogVersion, characterId
function UnlockContainerInstance(context, containerItemInstanceId, catalogVersion, characterId, keyItemInstanceId)
{
    var UnlockContainerInstance = server.UnlockContainerInstance(
    {
        ContainerItemInstanceId: containerItemInstanceId,
        PlayFabId: currentPlayerId,
        CatalogVersion: catalogVersion,
        CharacterId: characterId,
        KeyItemInstanceId: keyItemInstanceId
    });
    return(UnlockContainerInstance);
}//context, containerItemInstanceId, catalogVersion, characterId, keyItemInstanceId
function UnlockContainerItem(context, containerItemId)
{
    var UnlockContainerItem = server.UnlockContainerItem(
    {
        ContainerItemId: containerItemId,
        PlayFabId: currentPlayerId
    });
    return(UnlockContainerItem);
}//context, containerItemId
function UnlockContainerItem(context, containerItemId, catalogVersion)
{
    var UnlockContainerItem = server.UnlockContainerItem(
    {
        ContainerItemId: containerItemId,
        PlayFabId: currentPlayerId,
        CatalogVersion: catalogVersion
    });
    return(UnlockContainerItem);
}//context, containerItemId, catalogVersion
function UnlockContainerItem(context, containerItemId, catalogVersion, characterId)
{
    var UnlockContainerItem = server.UnlockContainerItem(
    {
        ContainerItemId: containerItemId,
        PlayFabId: currentPlayerId,
        CatalogVersion: catalogVersion,
        CharacterId: characterId
    });
    return(UnlockContainerItem);
}//context, containerItemId, catalogVersion, characterId
function UpdateUserInventoryItemCustomData(context, itemInstanceId)
{
    var UpdateUserInventoryItemCustomData = server.UpdateUserInventoryItemCustomData(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: currentPlayerId
    });
    return(UpdateUserInventoryItemCustomData);
}//context, itemInstanceId
function UpdateUserInventoryItemCustomData(context, itemInstanceId, characterId)
{
    var UpdateUserInventoryItemCustomData = server.UpdateUserInventoryItemCustomData(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: currentPlayerId,
        CharacterId: characterId
    });
    return(UpdateUserInventoryItemCustomData);
}//context, itemInstanceId, characterId
function UpdateUserInventoryItemCustomData(context, itemInstanceId, characterId, data)
{
    var UpdateUserInventoryItemCustomData = server.UpdateUserInventoryItemCustomData(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: currentPlayerId,
        CharacterId: characterId,
        Data: data
    });
    return(UpdateUserInventoryItemCustomData);
}//context, itemInstanceId, characterId, data
function UpdateUserInventoryItemCustomData(context, itemInstanceId, characterId, data, keysToRemove)
{
    var UpdateUserInventoryItemCustomData = server.UpdateUserInventoryItemCustomData(
    {
        ItemInstanceId: itemInstanceId,
        PlayFabId: currentPlayerId,
        CharacterId: characterId,
        Data: data,
        KeysToRemove: keysToRemove
    });
    return(UpdateUserInventoryItemCustomData);
}//context, itemInstanceId, characterId, data, keysToRemove
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILA PLAYFAB - Server-Side Cloud Script
//-------------------------------------------------------------------------------------------------------------------------------
function ExecuteCloudScript(context, functionName)
{
    var ExecuteCloudScript = server.ExecuteCloudScript(
    {
        FunctionName: functionName,
        PlayFabId: currentPlayerId
    });
    return(ExecuteCloudScript);
}//context, functionName
function ExecuteCloudScript(context, functionName, functionParameter)
{
    var ExecuteCloudScript = server.ExecuteCloudScript(
    {
        FunctionName: functionName,
        PlayFabId: currentPlayerId,
        FunctionParameter: functionParameter
    });
    return(ExecuteCloudScript);
}//context, functionName, functionParameter
function ExecuteCloudScript(context, functionName, functionParameter, generatePlayStreamEvent)
{
    var ExecuteCloudScript = server.ExecuteCloudScript(
    {
        FunctionName: functionName,
        PlayFabId: currentPlayerId,
        FunctionParameter: functionParameter,
        GeneratePlayStreamEvent: generatePlayStreamEvent
    });
    return(ExecuteCloudScript);
}//context, functionName, functionParameter, generatePlayStreamEvent
function ExecuteCloudScript(context, functionName, functionParameter, generatePlayStreamEvent, revisionSelection)
{
    var ExecuteCloudScript = server.ExecuteCloudScript(
    {
        FunctionName: functionName,
        PlayFabId: currentPlayerId,
        FunctionParameter: functionParameter,
        GeneratePlayStreamEvent: generatePlayStreamEvent,
        RevisionSelection: revisionSelection
    });
    return(ExecuteCloudScript);
}//context, functionName, functionParameter, generatePlayStreamEvent, revisionSelection
function ExecuteCloudScript(context, functionName, functionParameter, generatePlayStreamEvent, revisionSelection, specificRevision)
{
    var ExecuteCloudScript = server.ExecuteCloudScript(
    {
        FunctionName: functionName,
        PlayFabId: currentPlayerId,
        FunctionParameter: functionParameter,
        GeneratePlayStreamEvent: generatePlayStreamEvent,
        RevisionSelection: revisionSelection,
        SpecificRevision: specificRevision
    });
    return(ExecuteCloudScript);
}//context, functionName, functionParameter, generatePlayStreamEvent, revisionSelection, specificRevision
//-------------------------------------------------------------------------------------------------------------------------------
//                                                         VANILA PLAYFAB - Shared Group Data
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
//                                                         VANILA PLAYFAB - Title-Wide Data Management
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
