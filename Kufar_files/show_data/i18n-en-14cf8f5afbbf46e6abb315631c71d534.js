var en = function (n, ord) {
  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return (n10 == 1 && n100 != 11) ? 'one'
      : (n10 == 2 && n100 != 12) ? 'two'
      : (n10 == 3 && n100 != 13) ? 'few'
      : 'other';
  return (n == 1 && v0) ? 'one' : 'other';
};
var number = function (value, name, offset) {
  if (!offset) return value;
  if (isNaN(value)) throw new Error('Can\'t apply offset:' + offset + ' to argument `' + name +
                                    '` with non-numerical value ' + JSON.stringify(value) + '.');
  return value - offset;
};
var plural = function (value, offset, lcfunc, data, isOrdinal) {
  if ({}.hasOwnProperty.call(data, value)) return data[value];
  if (offset) value -= offset;
  var key = lcfunc(value, isOrdinal);
  if (key in data) return data[key];
  return data.other;
};
var select = function (value, data) {
  if ({}.hasOwnProperty.call(data, value)) return data[value];
  return data.other;
};

window.translations = {
  _: {
    name: function(d) { return "en"; }
  },
  activationRequest: {
    title: function(d) { return "Welcome to Chaport!"; },
    subtitlePasswordOnly: function(d) { return "Please create your password to complete account activation:"; },
    subtitleNameOnly: function(d) { return "Please indicate your name, visitors on your website will see it in widget under your photo:"; },
    subtitleBoth: function(d) { return "Please create your password and fill out the fields below to complete account activation:"; },
    errorPasswordsMismatch: function(d) { return "Passwords do not match"; },
    errorEmptyFields: function(d) { return "All fields are required"; },
    labelName: function(d) { return "Name"; },
    labelPassword: function(d) { return "Password"; },
    labelConfirmPassword: function(d) { return "Confirm password"; },
    buttonSubmit: function(d) { return "Activate Account"; },
    loading: function(d) { return "Loading..."; },
    invalidCode: function(d) { return "This activation code is not working: either your account has already been activated, or there is a typo in your code."; },
    emailResend: function(d) { return "Send activation email again"; },
    emailResendWait: function(d) { return "Send again in " + d.time; },
    alertSuccessText: function(d) { return "Your account has been successfully activated."; }
  },
  affiliates: {
    redirect: function(d) { return "Redirecting to <a href=\"" + d.url + "\">www.chaport.com</a>..."; }
  },
  alerts: {
    noSeatsAvailable: function(d) { return "No free seats. Your status will be automatically set to \"" + d.status + "\" when there is a seat available."; },
    connectionFailed: function(d) { return "Connection Failed."; },
    reconnecting: function(d) { return "Reconnecting..."; },
    connecting: function(d) { return "Connecting..."; },
    connectionRestored: function(d) { return "Successfully reconnected"; },
    updated: function(d) { return "Application has been successfully updated. Reloading..."; },
    genericError: function(d) { return "Error. Try refreshing the page."; },
    genericWarning: function(d) { return "Error. Try refreshing the page."; },
    genericFatal: function(d) { return "Error. Try refreshing the page."; },
    internalError: function(d) { return "Internal error"; },
    reloadLink: function(d) { return "Reload"; },
    reconnectLink: function(d) { return "Reconnect"; },
    sessionExpired: function(d) { return "Your session expired, please login again."; }
  },
  appearance: {
    chatButtonColor: function(d) { return "Chat widget color"; },
    customColor: function(d) { return "Custom color"; },
    bgImage: function(d) { return "Background image"; },
    positionLeft: function(d) { return "Position left"; },
    textStatuses: function(d) { return "Display message statuses as text"; },
    teamName: function(d) { return "Team name"; },
    onlineWelcome: function(d) { return "Online greeting text"; },
    offlineWelcome: function(d) { return "Offline greeting text"; },
    widgetSound: function(d) { return "Widget message sound"; },
    emailRequest: function(d) { return "Email request form"; },
    requestEmailWhenOnline: function(d) { return "Request an email address even when operators are online"; },
    requestPrivacyPolicyAgreement: function(d) { return "Request agreement to the Privacy Policy"; },
    privacyPolicyUrl: function(d) { return "Privacy policy URL"; },
    preview: function(d) { return "Preview"; }
  },
  autoInvitations: {
    defaultName: function(d) { return "Auto-Invitation"; },
    notifyProOnly: function(d) { return "To enable auto-invitations,<a href=\"" + "#" + "/settings/subscriptions\">upgrade to PRO.</a>"; },
    newAutoInvitation: function(d) { return "New Auto-Invitation"; },
    editAutoInvitation: function(d) { return "Edit Auto-Invitation"; },
    name: function(d) { return "Name"; },
    namePlaceholder: function(d) { return "E.g., \"Help offer\" (visible only to you)"; },
    send: function(d) { return "Send"; },
    messageText: function(d) { return "Message Text"; },
    when: function(d) { return "When"; },
    "if": function(d) { return "If"; },
    addCondition: function(d) { return "Add Condition"; },
    deleteAutoInvitation: function(d) { return "Delete Auto-Invitation"; },
    inviteWhen: function(d) { return "Invite when"; },
    initialAutoInvitationMessage: function(d) { return "Hey! How can I help you?"; },
    joiners: {
      and: function(d) { return "and"; },
      or: function(d) { return "or"; }
    },
    matchers: {
      equal_to: function(d) { return "="; },
      not_equal_to: function(d) { return "≠"; },
      contains: function(d) { return "Contains"; },
      does_not_contain: function(d) { return "Does not contain"; },
      greater_than: function(d) { return ">"; },
      less_than: function(d) { return "<"; }
    },
    operatorsOnlineOptions: {
      online: function(d) { return "Operators are Online"; },
      offline: function(d) { return "Operators are Offline"; },
      any: function(d) { return "Does not matter if operators are Online"; }
    },
    parameters: {
      page_url: function(d) { return "Page URL"; },
      referrer_url: function(d) { return "Referrer URL"; },
      time_on_page: function(d) { return "Time on Page"; },
      time_on_site: function(d) { return "Time on Site"; },
      page_views: function(d) { return "Page Views"; },
      time_after_close: function(d) { return "Time After Closing Widget"; },
      country: function(d) { return "Country"; },
      language: function(d) { return "Language"; }
    },
    units: {
      sec: function(d) { return "sec."; }
    }
  },
  bot: {
    ecwidWelcomeFull: function(d) { return "Your Ecwid account has been successfully integrated with Chaport!\n\nJust check it out on your website now: " + d.storeUrl; },
    ecwidWelcomeShort: function(d) { return "Your Ecwid account has been successfully integrated with Chaport!"; }
  },
  buttons: {
    done: function(d) { return "Done"; },
    save: function(d) { return "Save"; },
    back: function(d) { return "Back"; },
    send: function(d) { return "Send"; },
    "continue": function(d) { return "Continue"; },
    finish: function(d) { return "Finish"; },
    close: function(d) { return "Close"; },
    cancel: function(d) { return "Cancel"; },
    "delete": function(d) { return "Delete"; },
    edit: function(d) { return "Edit"; },
    authorize: function(d) { return "Authorize"; },
    continueAs: function(d) { return "Continue as " + d.userName; },
    deny: function(d) { return "Deny"; },
    details: function(d) { return "Details"; },
    goOnline: function(d) { return "Set status to \"Online\""; },
    keepAway: function(d) { return "Keep status \"Away\""; },
    learnMore: function(d) { return "Learn more"; },
    moreActions: function(d) { return "More actions"; },
    add: function(d) { return "Add"; }
  },
  chat: {
    you: function(d) { return "You"; },
    toYou: function(d) { return "you"; },
    whomYou: function(d) { return "you"; },
    operatorInvitedSomeoneElse: function(d) { return d.inviter + " invited " + d.invitee + " to join the chat"; },
    operatorTranferedChat: function(d) { return d.initiator + " transfered the chat to " + d.recepient; },
    operatorBannedVisitor: function(d) { return d.operator + " banned the visitor in chat"; },
    operatorUnbannedVisitor: function(d) { return d.operator + " unbanned the visitor in chat"; },
    operatorEnteredChat: function(d) { return d.operatorName + " entered the chat"; },
    operatorJoinedChat: function(d) { return d.operatorName + " joined the chat"; },
    operatorLeftChat: function(d) { return d.operatorName + " left the chat"; },
    youJoinedChat: function(d) { return "You joined the chat"; },
    youLeftChat: function(d) { return "You left the chat"; },
    visitorEnteredChat: function(d) { return d.visitorName + " entered the chat"; },
    visitorLeftChat: function(d) { return d.visitorName + " left the chat"; },
    visitorOpenedPage: function(d) { return "Visitor opened the page \"" + d.pageTitle + "\""; },
    titleNotificationMessageReceived: function(d) { return "New message received!"; },
    notificationMessageReceived: function(d) { return "You've received a new message"; },
    notificationChatTransfer: function(d) { return "Chat has been transfered to you"; },
    notificationInvite: function(d) { return "You have been invited to join chat"; },
    notificationFileTransfer: function(d) { return "A file has been sent to you"; },
    hiddenMessages: function(d) { return "There are some older messages.<br><a href=\"/" + "#" + "/settings/subscriptions\">Upgrade to PRO</a> to get access to chat history older than 30 days."; },
    botIntro: function(d) { return "Hey! I'm Chaport-bot, and I'll help you get started here.\n\nTry our chat in action by following this link: " + d.landingUrl + "\n\nTo install the chat on your website, go to \"Settings -> Installation code\"."; },
    titleNewMessages: function(d) { return plural(d.count, 0, en, { one: "(1) New message received", other: "(" + number(d.count, "count") + ") New messages received" }); },
    defaultVisitorName: function(d) { return "Visitor " + "#" + d.i; },
    goOnlineToChat: function(d) { return "Go online to chat"; },
    inputMobileJoinLabel: function(d) { return "Start typing to join the chat..."; },
    inputJoinLabel: function(d) { return "Start typing or press enter to join the chat..."; },
    editMessage: function(d) { return "Edit message"; },
    deleteMessage: function(d) { return "Delete message"; },
    deleteMessageConfirm: function(d) { return "Are you sure you want to delete this message?"; },
    lastSeenOnline: function(d) { return "online"; },
    lastSeenRecently: function(d) { return "last seen recently"; },
    lastSeenHoursAgo: function(d) { return "last seen " + plural(d.hours, 0, en, { one: "1 hour", other: number(d.hours, "hours") + " hours " }) + " ago"; },
    lastSeenTodayAt: function(d) { return "last seen today at " + d.time; },
    lastSeenYesterdayAt: function(d) { return "last seen yesterday at " + d.time; },
    lastSeenDate: function(d) { return "last seen " + d.date; },
    messageNotDelivered: function(d) { return "Not Delivered"; },
    fileSent: function(d) { return "File has been sent."; },
    fileUnavailable: function(d) { return "A file " + select(d.name, { undefined: "", other: "\"" + d.name + "\" " }) + "is not available."; },
    fileUploadProgress: function(d) { return "Uploading..."; },
    fileIsTooLarge: function(d) { return "File size is limited to 10MB."; },
    download: function(d) { return "Download"; },
    exports: {
      json: function(d) { return "JSON"; },
      csv: function(d) { return "CSV"; }
    },
    sizes: {
      b: function(d) { return d.number + " B"; },
      kb: function(d) { return d.number + " KB"; },
      mb: function(d) { return d.number + " MB"; }
    },
    transcripts: {
      visitor: function(d) { return "Visitor"; },
      team: function(d) { return "Team"; },
      activateToRequest: function(d) { return "Activate the account (check your email) to request the transcript."; },
      sent: function(d) { return "The chat transcript has been sent to your email address."; },
      sendFailed: function(d) { return "Failed to send a chat transcript."; }
    }
  },
  chats: {
    search: function(d) { return "Search"; },
    open: function(d) { return "Open"; },
    all: function(d) { return "All"; },
    openChatsEmpty: function(d) { return "No open chats"; },
    allChatsEmpty: function(d) { return "No chat history"; },
    searchChatsEmpty: function(d) { return "No chats found"; },
    youAreAlone: function(d) { return "(you are alone now)"; },
    filterAllOperators: function(d) { return "All operators"; },
    filterYours: function(d) { return "My chats"; },
    filterOthers: function(d) { return "Others chats"; },
    filterAll: function(d) { return "All chats"; },
    filterOperatorDeleted: function(d) { return d.name + " (Deleted)"; },
    close: function(d) { return "Close"; },
    reopen: function(d) { return "Reopen"; },
    unassigned: function(d) { return "Unassigned"; },
    banVisitor: function(d) { return "Ban Visitor"; },
    unbanVisitor: function(d) { return "Unban Visitor"; },
    leaveChat: function(d) { return "Leave"; },
    transferChat: function(d) { return "Transfer"; },
    inviteOperator: function(d) { return "Invite Operator"; },
    exportConversation: function(d) { return "Export"; },
    deleteConversation: function(d) { return "Delete"; },
    confirmDelete: function(d) { return "Type 'DELETE' and press OK in order to delete this chat with all associated visitor information. Warning: this process can't be reversed!"; },
    alertDelete: function(d) { return "To delete the chat, type 'DELETE' in a popup window."; },
    email: function(d) { return "Email"; },
    emailTranscript: function(d) { return "Email Transcript"; },
    noChatSelected: function(d) { return "No Chat Selected"; },
    upgradeToProLink: function(d) { return "Upgrade to PRO"; },
    upgradeToProTail: function(d) { return "to see full visitor info"; },
    infoName: function(d) { return "Name"; },
    infoNamePlaceholder: function(d) { return "+ Add Name"; },
    infoEmail: function(d) { return "Email"; },
    infoEmailPlaceholder: function(d) { return "+ Add Email"; },
    infoPhone: function(d) { return "Phone"; },
    infoPhonePlaceholder: function(d) { return "+ Add Phone"; },
    infoNotes: function(d) { return "Notes"; },
    infoNotesPlaceholder: function(d) { return "+ Add Notes"; },
    infoNotesVisibility: function(d) { return "visible only to operators"; },
    infoLanguage: function(d) { return "Language"; },
    infoWebsite: function(d) { return "Website"; },
    infoCart: function(d) { return "Shopping cart"; },
    infoStartPage: function(d) { return "Chat start page"; },
    infoReferrer: function(d) { return "Source"; },
    infoLocation: function(d) { return "Location"; },
    infoUserAgent: function(d) { return "User agent"; },
    infoBrowser: function(d) { return "Browser"; },
    infoOS: function(d) { return "OS"; },
    infoReferrerDirectHit: function(d) { return "Direct visit"; },
    infoVisitorIp: function(d) { return "IP-address"; },
    statusUpdatedAutomaticallyTitle: function(d) { return "Your status has been automatically updated"; },
    statusUpdatedAutomaticallyDescription: function(d) { return "Your status has been automatically set to Away due to a missed chat. Choose status to continue."; },
    consents: {
      marketing: {
        label: function(d) { return "Marketing permission"; },
        yes: function(d) { return "marketing permission"; },
        no: function(d) { return "no marketing permission"; }
      }
    },
    utm: {
      source: function(d) { return "UTM Source"; },
      medium: function(d) { return "UTM Medium"; },
      term: function(d) { return "UTM Term"; },
      campaign: function(d) { return "UTM Campaign"; },
      content: function(d) { return "UTM Content"; }
    }
  },
  confirmationRequest: {
    loadingTitle: function(d) { return "Email address activation"; },
    loadingText: function(d) { return "Processing..."; },
    successTitle: function(d) { return "Email address activation"; },
    successText: function(d) { return "Email address has been successfully activated and it will be used to receive future offline messages."; },
    notFoundTitle: function(d) { return "This activation code is not working"; },
    notFoundText: function(d) { return "Either this email address has already been activated or there is a typo in your code"; },
    errorTitle: function(d) { return "Error"; },
    errorText: function(d) { return "Error occurred while processing the activation request. Please check your internet connection and try again later."; },
    buttonGoToApp: function(d) { return "Go to application"; }
  },
  date: {
    today: function(d) { return "Today"; },
    yesterday: function(d) { return "Yesterday"; },
    formats: {
      date: function(d) { return d.month + " " + d.day + ", " + d.year; },
      time: function(d) { return d.hour + ":" + d.minute; },
      minutes: function(d) { return d.minute + ":" + d.second; },
      day: function(d) { return d.dayOfWeek + ", " + d.month + " " + d.day; },
      weekDay: function(d) { return d.dayOfWeek + " " + d.day; },
      weekDayTime: function(d) { return d.dayOfWeek + " " + d.hour + ":" + d.minute; }
    },
    monthNames: {
      jan: function(d) { return "January"; },
      feb: function(d) { return "February"; },
      mar: function(d) { return "March"; },
      apr: function(d) { return "April"; },
      may: function(d) { return "May"; },
      jun: function(d) { return "June"; },
      jul: function(d) { return "July"; },
      aug: function(d) { return "August"; },
      sep: function(d) { return "September"; },
      oct: function(d) { return "October"; },
      nov: function(d) { return "November"; },
      dec: function(d) { return "December"; }
    },
    shortMonthNames: {
      jan: function(d) { return "Jan"; },
      feb: function(d) { return "Feb"; },
      mar: function(d) { return "Mar"; },
      apr: function(d) { return "Apr"; },
      may: function(d) { return "May"; },
      jun: function(d) { return "Jun"; },
      jul: function(d) { return "Jul"; },
      aug: function(d) { return "Aug"; },
      sep: function(d) { return "Sep"; },
      oct: function(d) { return "Oct"; },
      nov: function(d) { return "Nov"; },
      dec: function(d) { return "Dec"; }
    },
    shortWeekDayNames: {
      sun: function(d) { return "Sun"; },
      mon: function(d) { return "Mon"; },
      tue: function(d) { return "Tue"; },
      wed: function(d) { return "Wed"; },
      thu: function(d) { return "Thu"; },
      fri: function(d) { return "Fri"; },
      sat: function(d) { return "Sat"; }
    },
    weekDayNames: {
      sun: function(d) { return "Sunday"; },
      mon: function(d) { return "Monday"; },
      tue: function(d) { return "Tuesday"; },
      wed: function(d) { return "Wednesday"; },
      thu: function(d) { return "Thursday"; },
      fri: function(d) { return "Friday"; },
      sat: function(d) { return "Saturday"; }
    }
  },
  downloads: {
    platforms: {
      osx64: function(d) { return "Mac"; },
      win32: function(d) { return "Windows"; },
      ios: function(d) { return "iOS"; },
      android: function(d) { return "Android"; },
      web: function(d) { return "Web-version"; }
    }
  },
  emails: {
    activation: {
      subject: function(d) { return "Activate your account at Chaport.com"; },
      welcome: function(d) { return "Welcome to Chaport!"; },
      activateYourAccount: function(d) { return "Activate your Chaport account by clicking the link below:"; },
      ignoreThisEmail: function(d) { return "Ignore this email if you didn't register at Chaport.com."; },
      activateButton: function(d) { return "Activate Account"; }
    },
    chatTranscript: {
      heading: function(d) { return "Below is requested transcript of the chat with " + d.name + ":"; },
      subject: function(d) { return d.name + ": chat transcript"; },
      subjectWithEmail: function(d) { return d.name + " (" + d.email + "): chat transcript"; }
    },
    chatsDecrease: {
      subject: function(d) { return "The number of chats has decreased by " + d.percentage + "%."; },
      warning: function(d) { return "Decrease in chats number"; },
      greeting: function(d) { return "Hey, " + d.ownerName + "!"; },
      heading: function(d) { return "The number of chats you receive has&nbsp;decreased&nbsp;by&nbsp;" + d.percentage + "%."; },
      causes: function(d) { return "Most likely, it was caused by downgrading to the Free plan and disabling of the \"auto-invitations\" feature, which initiates most of the chats. You may see the decrease in the following chart:"; },
      explanation: function(d) { return "During the last " + d.numDaysPro + " days of using the PRO-version, on average, you had been receiving <b>" + plural(d.numChatsPerDayPro, 0, en, { one: "1&nbsp;chat", other: number(d.numChatsPerDayPro, "numChatsPerDayPro") + "&nbsp;chats" }) + "&nbsp;per&nbsp;day</b>, and after switching to the Free plan, this number&nbsp;dropped to <b>" + plural(d.numChatsPerDayFree, 0, en, { one: "1&nbsp;chat", other: number(d.numChatsPerDayFree, "numChatsPerDayFree") + "&nbsp;chats" }) + "&nbsp;per&nbsp;day</b>. The total number of chats <b>decreased&nbsp;by&nbsp;" + d.percentage + "%</b>."; },
      goToPro: function(d) { return "You can go PRO and increase the number of chats by activating auto-invitations and get access to many other useful features."; },
      labelChatsCountAutoInv: function(d) { return "#" + " of chats initiated by auto-invitations"; },
      labelChatsCountIncoming: function(d) { return "#" + " of chats initiated by visitors"; }
    },
    footer: {
      copyright: function(d) { return "©"; },
      llc: function(d) { return "Chaport LLC"; },
      address: function(d) { return "Chaport ul. Yakova Eshpaya, 156a-34, Yoshkar-Ola, 424002, Russia | "; },
      unsubscribe: function(d) { return "Unsubscribe"; }
    },
    installWidget: {
      subject: function(d) { return "Install www.chaport.com widget on your website"; },
      header: function(d) { return "Install Chaport widget on your website"; },
      requestedToSendEmail: function(d) { return d.senderEmail + " requested us to send this email to you."; },
      embedCode: function(d) { return "You can start using our chat widget on your website by pasting the code below before the </body> tag:"; },
      stillDontKnowHowToInstall: function(d) { return "Still don't know how to install the widget?"; },
      weCanHelp: function(d) { return "That's why we are here! Send us an email to " + d.email + " or chat with us on " + d.site + "."; },
      promoLink: function(d) { return "<a href='https://www.chaport.com'>our website</a>"; },
      promoUrl: function(d) { return "https://www.chaport.com"; },
      websiteAdministrator: function(d) { return "If there is an administrator managing your website, you can also forward them this email. Most likely they'll know what to do!"; },
      ignoreThisEmail: function(d) { return "Please ignore this email if you don't recognize person above."; },
      ignoreThisEmailYourself: function(d) { return "Please ignore this email if you did not request this code."; }
    },
    offlineEmailActivation: {
      subject: function(d) { return "Email address activation at Chaport.com"; },
      header: function(d) { return "Email Address Activation"; },
      emailHasBeenSet: function(d) { return d.requestedBy + " has set this email address to receive offline messages from Сhaport.com."; },
      otherwiseActivate: function(d) { return "Activate your email address to receive offline messages by clicking the link below:"; },
      ignoreThisEmail: function(d) { return "Ignore this email if you don't recognize person above or if you just don't want to receive offline messages from Chaport.com."; },
      activateButton: function(d) { return "Activate Email Address"; }
    },
    offlineMessage: {
      subject: function(d) { return "Offline message from " + d.visitorName + " <" + d.visitorEmail + ">"; },
      subjectNoEmail: function(d) { return "Offline message from " + d.visitorName; },
      visitorSentOfflineMessage: function(d) { return "A visitor has just sent you an offline message."; },
      openConversation: function(d) { return "To view the entire conversation and reply to this message click the link below:"; },
      replyButton: function(d) { return "Go to conversation page"; },
      dontReplyMessage: function(d) { return "To continue dialog go to " + d.conversationPage + "."; },
      conversationPage: function(d) { return "the conversation page"; },
      namedFileSent: function(d) { return "A " + select(d.name, { undefined: "", other: "\"" + d.name + "\" " }) + "file has been sent."; }
    },
    operatorActivation: {
      subject: function(d) { return "You've been invited to Chaport.com"; },
      header: function(d) { return "Welcome to Chaport!"; },
      youHaveBeenInvited: function(d) { return "You've been invited to use Chaport Live Chat by " + d.inviterEmail + "."; },
      activateYourAccount: function(d) { return "Activate your Chaport account by clicking the link below:"; },
      ignoreThisEmail: function(d) { return "Ignore this email if you do not recognize the inviter."; },
      activateButton: function(d) { return "Activate Account"; }
    },
    operatorOfflineMessage: {
      subject: function(d) { return "Message from " + d.host; },
      operatorSentOfflineMessage: function(d) { return d.name + " from " + d.host + " has just sent you a message."; }
    },
    passwordReset: {
      subject: function(d) { return "Reset account password at Chaport.com"; },
      greeting: function(d) { return "Hey, " + d.name + "!"; },
      resetPassword: function(d) { return "We received a request to reset the password for your account."; },
      clickLinkBelow: function(d) { return "If you made this request, click the link below:"; },
      ignoreThisEmail: function(d) { return "Ignore this email if you did not request password reset."; },
      resetButton: function(d) { return "Reset password"; }
    },
    prechatFormIpadViber: {
      subject: function(d) { return "Introducing Pre-chat Form, Custom Fields, and more"; },
      header: function(d) { return "Here’s What’s New"; },
      preheader: function(d) { return "We’re happy to announce Chaport’s new features: Pre-chat Form, Custom Fields, Visitor Info Panel Customization, Integration with Viber, Chaport for iPad, and much more."; },
      learnMore: function(d) { return "Learn More"; },
      download: function(d) { return "Download"; },
      prechat: function(d) { return "Pre-chat Form"; },
      prechatText: function(d) { return "Request name, email, phone and any other visitor information\nbefore starting a chat."; },
      customFields: function(d) { return "Custom Fields"; },
      customFieldsText: function(d) { return "Create your own fields – Company Name, Order Number, etc. Add these fields to the pre-chat form, edit them manually or pass using Javascript API."; },
      visitorInfo: function(d) { return "Visitor Info Panel Customization"; },
      visitorInfoText: function(d) { return "Add new fields, hide or reorder fields in the visitor info panel."; },
      viberIntegration: function(d) { return "Integration with Viber"; },
      viberIntegrationText: function(d) { return "Let your customers contact you via Viber, Facebook Messenger, VK or Telegram.\nRespond from Chaport."; },
      iPad: function(d) { return "Chaport for iPad"; },
      iPadText: function(d) { return "Install Chaport on your iPad and enjoy your work even more."; },
      updatesLink: function(d) { return "https://www.chaport.com/blog/introducing-pre-chat-form-custom-fields-and-more"; },
      multiChannelLink: function(d) { return "https://www.chaport.com/blog/multi-channel-integration-with-viber"; },
      appStoreLink: function(d) { return "https://apps.apple.com/app/chaport-messenger-for-websites/id1141834008" + "#" + "?platform=ipad"; },
      utm: function(d) { return "?utm_source=Newsletter&utm_medium=Email&utm_campaign=Pre-chat+Form+EN"; }
    },
    shared: {
      chaportPromoUrl: function(d) { return "www.chaport.com"; },
      chaportTeamSignature: function(d) { return "— Chaport Team"; },
      proFeatures: {
        disabledFeatures: function(d) { return "The following features have been disabled:"; },
        autoInvitations: function(d) { return "Auto-invitations"; },
        initiateMostOfChats: function(d) { return "initiate most of chats"; },
        searchAndSavedReplies: function(d) { return "Search & saved replies"; },
        integrations: function(d) { return "Integrations with Facebook, Viber, Telegram, etc."; },
        visitorInfo: function(d) { return "Visitor info"; },
        typingInsight: function(d) { return "Typing insights"; },
        savedReplies: function(d) { return "Saved replies"; },
        visitorBan: function(d) { return "Visitor ban"; },
        fileSending: function(d) { return "File sending"; },
        API: function(d) { return "API"; },
        unlimitedChatHistory: function(d) { return "Unlimited chat history"; },
        now: function(d) { return "now"; },
        willBe: function(d) { return "will be"; },
        thirtyDaysChatHistory: function(d) { return "30 days"; },
        unlimitedOperatorSeats: function(d) { return "Unlimited operator seats"; },
        oneOperatorSeat: function(d) { return "1 seat"; },
        andOther: function(d) { return "And the other"; },
        proFeatures: function(d) { return "PRO features"; }
      }
    },
    subscriptionAlmostExpired: {
      subject: function(d) { return "Your paid subscription at Chaport.com is expiring in " + plural(d.daysUntilExpires, 0, en, { one: "1 day", other: number(d.daysUntilExpires, "daysUntilExpires") + " days" }); },
      warning: function(d) { return "Your subscription is expiring"; },
      greeting: function(d) { return "Hey, " + d.ownerName + "!"; },
      expiresAt: function(d) { return "Your " + d.planName + "-subscription is expiring in " + plural(d.daysUntilExpires, 0, en, { one: "1 day", other: number(d.daysUntilExpires, "daysUntilExpires") + " days" }) + "."; },
      considerRenewing: function(d) { return "Renew the subscription by clicking the link below:"; },
      renewButton: function(d) { return "Renew Subscription"; }
    },
    subscriptionExpired: {
      subject: function(d) { return "Your paid subscription at Chaport.com has expired"; },
      warning: function(d) { return "Your subscription has expired"; },
      greeting: function(d) { return "Hey, " + d.ownerName + "!"; },
      subscriptionHasExpired: function(d) { return "Your " + d.planName + "-subscription has just expired."; },
      accountDowngraded: function(d) { return "Your account has been downgraded to the free plan."; },
      historyWillBeClearedOn: function(d) { return "Your chat history older than 30 days will be cleared on " + d.date + " unless you renew your subscription."; },
      considerRenewing: function(d) { return "Renew the subscription by clicking the link below:"; },
      renewButton: function(d) { return "Renew Subscription"; }
    },
    trialAlmostEnded: {
      subject: function(d) { return "Your PRO trial is expiring in " + plural(d.daysUntilExpires, 0, en, { one: "1 day", other: number(d.daysUntilExpires, "daysUntilExpires") + " days" }); },
      warning: function(d) { return "Your trial is expiring"; },
      greeting: function(d) { return "Hey, " + d.ownerName + "!"; },
      expiresAt: function(d) { return "Your Chaport PRO trial is expiring in " + plural(d.daysUntilExpires, 0, en, { one: "1 day", other: number(d.daysUntilExpires, "daysUntilExpires") + " days" }) + "."; },
      accountWillBeDowngraded: function(d) { return "Your account will be downgraded to the free plan."; },
      willBeDisabledFeatures: function(d) { return "The following features will be disabled:"; },
      considerRenewing: function(d) { return "Subscribe to PRO now to continue using all the features without interruptions:"; }
    },
    trialEnded: {
      subject: function(d) { return "Your PRO trial has ended"; },
      warning: function(d) { return "14-day PRO trial has ended"; },
      greeting: function(d) { return "Hey, " + d.ownerName + "!"; },
      trialEnded: function(d) { return "Your Chaport PRO trial has ended."; },
      accountDowngraded: function(d) { return "Your account has been downgraded to the free plan."; },
      pleaseNote: function(d) { return "Please note"; },
      fewerChats: function(d) { return "You can receive significantly fewer chats now as auto-invitations initiate most of them."; },
      considerRenewing: function(d) { return "Continue using Chaport with a paid plan and get all the features back:"; },
      renewButton: function(d) { return "Upgrade to PRO"; }
    }
  },
  emoji: {
    people: function(d) { return "People"; },
    nature: function(d) { return "Nature"; },
    objects: function(d) { return "Objects"; },
    places: function(d) { return "Places"; },
    symbols: function(d) { return "Symbols"; }
  },
  generalSettings: {
    autoAssign: function(d) { return "Assign operators automatically"; },
    autoReassign: function(d) { return "Transfer unanswered chats automatically"; },
    autoClose: function(d) { return "Close answered chats automatically"; },
    whenOperatorsOnline: function(d) { return "When operators are online"; },
    whenOperatorsOffline: function(d) { return "When operators are offline"; },
    newChats: function(d) { return "New chats"; },
    oldChats: function(d) { return "Existing chats"; },
    whatAutoReassignIs: function(d) { return "If auto-assign is on, the chat is transferred to a different online operator. Otherwise, it becomes unassigned."; },
    afterOperatorResponse: function(d) { return "After operator response"; },
    notifications: function(d) { return "Notifications"; },
    offlineEmail: function(d) { return "Send offline-message email notifications to:"; },
    offlineEmailPlaceholder: function(d) { return "Email"; },
    offlineEmailNote: function(d) { return "Leave empty if you don't want to receive email notifications."; },
    emailConfirmationRequired: function(d) { return "Confirmation required"; },
    emailResendConfirmation: function(d) { return "Resend confirmation email"; },
    unconfirmedNote: function(d) { return "A confirmation email has been sent to this address"; },
    requestEmailAutomatically: function(d) { return "Request a visitor's email address automatically"; },
    gdprInform: function(d) { return "Inform visitors how you process their personal data"; },
    beforeStartingAChat: function(d) { return "Before starting a chat"; },
    text: function(d) { return "Text"; },
    question: function(d) { return "Question"; },
    gdprInformDefaultTextWithLink: function(d) { return "We use provided [personal data](" + d.link + ") for support purposes only"; },
    gdprInformComment: function(d) { return "Visitors will see this text before they start a chat."; },
    linkText: function(d) { return "Link"; },
    youCanPasteLink: function(d) { return "You can paste a link using the following format:"; },
    requestMarketingPermission: function(d) { return "Request marketing permission"; },
    whenYouRequestAnEmail: function(d) { return "When you request a visitor's email address"; },
    marketingPermissionComment: function(d) { return "When you request an email address, visitors will be required to answer this question by choosing 'Yes' or 'No'."; },
    alertEmailSent: function(d) { return "Confirmation email has been sent, please check the inbox."; },
    alertEmailAlreadyActivated: function(d) { return "The email has been successfully confirmed."; },
    alertEmailQuotaExceeded: function(d) { return "You've exceeded the hourly/daily quota of changing your email address for offline messages. Please contact support or wait before changing your offline email."; }
  },
  help: {
    askQuestion: function(d) { return "Ask a Question"; },
    knowledgeBase: function(d) { return "Knowledge Base"; },
    knowledgeBaseUrl: function(d) { return "https://chaport.com/help"; }
  },
  installationCode: {
    copyAndPasteCode: function(d) { return "Copy & paste this code above the &lt;/body&gt; tag in HTML-code on your website:"; },
    copyCode: function(d) { return "Copy Installation Code"; },
    copyId: function(d) { return "Copy App ID"; },
    copiedCode: function(d) { return "Your installation code has been copied to the clipboard."; },
    copiedId: function(d) { return "Your app ID has been copied to the clipboard."; },
    alternativeMethodsCaption: function(d) { return "Or use a plugin:"; },
    platforms: {
      ecwid: {
        name: function(d) { return "Ecwid"; },
        helpLink: function(d) { return "https://www.chaport.com/help/installation-on-a-website/install-chaport-on-ecwid"; }
      },
      joomla: {
        name: function(d) { return "Joomla"; },
        helpLink: function(d) { return "https://www.chaport.com/help/installation-on-a-website/install-chaport-on-joomla"; }
      },
      tagManager: {
        name: function(d) { return "Google Tag&nbsp;Manager"; },
        helpLink: function(d) { return "https://www.chaport.com/help/installation-on-a-website/install-chaport-using-google-tag-manager "; }
      },
      wordpress: {
        name: function(d) { return "WordPress"; },
        helpLink: function(d) { return "https://www.chaport.com/help/installation-on-a-website/install-chaport-on-wordpress"; }
      }
    }
  },
  integrations: {
    connected: function(d) { return "Connected"; },
    createLink: function(d) { return "Connect"; },
    viewDetails: function(d) { return "Details"; },
    disconnect: function(d) { return "Disconnect"; },
    availableOnPro: function(d) { return "Available on PRO"; },
    unavailableOnFree: function(d) { return "Unavailable on Free"; },
    limitedOnFree: function(d) { return "Limited on Free"; },
    howToConnect: function(d) { return "How to Connect"; },
    howToConnectDescription: function(d) { return "Click on the \"Connect\" button and choose a " + d.platformName + " " + d.channelSingularWhom + " you want to connect."; },
    notifyFreeLimits: function(d) { return "To use integrations without restrictions, <a href=\"/" + "#" + "/settings/subscriptions\">upgrade to PRO</a>."; },
    disconnectConfirm: function(d) { return "Do you wish to disconnect \"" + d.channelName + "\"?"; },
    disconnectAllConfirm: function(d) { return "Do you wish to disconnect " + d.platformName + "?"; },
    description: function(d) { return "Answer customer questions coming from " + d.platformName + " directly from Chaport."; },
    connectedChannels: function(d) { return "Connected " + d.platformName + " " + d.channelPlural + ":"; },
    addChannel: function(d) { return "+ Connect a " + d.channelSingular; },
    disconnectAll: function(d) { return "Disconnect " + d.platformName; },
    connectingChannel: function(d) { return "Connecting a " + d.platformName + " " + d.channelSingular; },
    channelToken: function(d) { return d.platformName + " token"; },
    needHelp: function(d) { return "Need help? Read the article: <a href=\"" + d.helpLink + "\" target=\"_blank\">Integration with " + d.platformName + "</a>"; },
    alertServiceUnavailable: function(d) { return "Integrations service is currently unavailable. Please try again later."; },
    alertMissingPermissions: function(d) { return "Requested permissions are necessary to ensure that your messages and messages of your " + d.platformName + " customers can be delivered properly."; },
    alertNoChannelsAvailable: function(d) { return "Your current " + d.platformName + " account does not have any " + d.channelPlural + " associated with it available for integration."; },
    alertConnectedSuccessfully: function(d) { return "The " + select(d.channelName, { undefined: "", other: "\"" + d.channelName + "\" " }) + d.platformName + " " + d.channelSingular + " has been successfully connected to your Chaport account."; },
    alertConnectedAlready: function(d) { return "This " + d.platformName + " " + d.channelSingular + " has already been connected to a different Chaport account."; },
    alertDisconnectedSuccessfully: function(d) { return "The " + select(d.channelName, { undefined: "", other: "\"" + d.channelName + "\" " }) + d.platformName + " " + d.channelSingular + " has been successfully disconnected from your Chaport account."; },
    alertDisconnectedAllSuccessfully: function(d) { return "All " + d.platformName + " " + d.channelPlural + " have been successfully disconnected from your Chaport account."; },
    alertInvalidToken: function(d) { return "This token doesn't seem to be valid."; },
    numberOfIntegrations: function(d) { return "1,500+ integrations"; },
    ecwid: {
      name: function(d) { return "Ecwid"; },
      description: function(d) { return "Install the chat widget on your Ecwid-based site and automatically pass user info to Chaport."; },
      channelSingular: function(d) { return "site"; },
      channelSingularWhom: function(d) { return "site"; },
      channelSingularNo: function(d) { return "site"; },
      channelPlural: function(d) { return "sites"; },
      howToConnectDescription: function(d) { return "Click on the \"Connect\" button and add Chaport to your Ecwid-based store website."; }
    },
    facebook: {
      name: function(d) { return "Facebook"; },
      channelGender: function(d) { return ""; },
      channelSingular: function(d) { return "page"; },
      channelSingularWhom: function(d) { return "page"; },
      channelSingularNo: function(d) { return "page"; },
      channelPlural: function(d) { return "pages"; },
      needHelpLink: function(d) { return "https://www.chaport.com/integrations/facebook"; },
      howToConnectDescription: function(d) { return "Click on the \"Connect\" button and choose a Facebook page you want to connect."; }
    },
    telegram: {
      name: function(d) { return "Telegram"; },
      channelGender: function(d) { return ""; },
      channelSingular: function(d) { return "bot"; },
      channelSingularWhom: function(d) { return "bot"; },
      channelSingularNo: function(d) { return "bot"; },
      channelPlural: function(d) { return "bots"; },
      needHelpLink: function(d) { return "https://www.chaport.com/integrations/telegram"; },
      howToConnectDescription: function(d) { return "Click on the \"Connect\" button and enter the token of a Telegram bot you want to connect."; }
    },
    viber: {
      name: function(d) { return "Viber"; },
      channelGender: function(d) { return ""; },
      channelSingular: function(d) { return "bot"; },
      channelSingularWhom: function(d) { return "bot"; },
      channelSingularNo: function(d) { return "bot"; },
      channelPlural: function(d) { return "bots"; },
      needHelpLink: function(d) { return "https://www.chaport.com/help/integrations/integration-with-viber"; },
      howToConnectDescription: function(d) { return "Click on the \"Connect\" button and enter the token of a Viber bot you want to connect."; }
    },
    vk: {
      name: function(d) { return "VK"; },
      channelGender: function(d) { return ""; },
      channelSingular: function(d) { return "community"; },
      channelSingularWhom: function(d) { return "community"; },
      channelSingularNo: function(d) { return "community"; },
      channelPlural: function(d) { return "communities"; },
      needHelpLink: function(d) { return "https://www.chaport.com/help/integrations/integration-with-vk"; },
      howToConnectDescription: function(d) { return "Click on the \"Connect\" button and enter the token of a VK community you want to connect."; }
    },
    wordpress: {
      name: function(d) { return "Wordpress"; },
      description: function(d) { return "Install the chat widget on your Wordpress-based site and automatically pass user info to Chaport."; },
      channelSingular: function(d) { return "site"; },
      channelSingularWhom: function(d) { return "site"; },
      channelSingularNo: function(d) { return "site"; },
      channelPlural: function(d) { return "sites"; },
      howToConnectDescription: function(d) { return "Click on the \"Connect\" button and add Chaport Wordpress plugin to your website."; }
    },
    zapier: {
      name: function(d) { return "Zapier"; },
      channelSingular: function(d) { return "zap"; },
      channelSingularWhom: function(d) { return "zap"; },
      channelSingularNo: function(d) { return "zap"; },
      channelPlural: function(d) { return "zaps"; },
      howToConnectDescription: function(d) { return "Click on the \"Connect\" button to set up a new Zap."; },
      description: function(d) { return "Use Zapier to integrate Chaport with 1,500+ other services."; }
    }
  },
  intervals: {
    never: function(d) { return "Never"; },
    afterXSeconds: function(d) { return "After " + plural(d.value, 0, en, { one: "1 second", other: number(d.value, "value") + " seconds" }); },
    afterXMinutes: function(d) { return "After " + plural(d.value, 0, en, { one: "1 minute", other: number(d.value, "value") + " minutes" }); },
    afterXHours: function(d) { return "After " + plural(d.value, 0, en, { one: "1 hour", other: number(d.value, "value") + " hours" }); }
  },
  labels: {
    and: function(d) { return "and"; },
    yes: function(d) { return "Yes"; },
    no: function(d) { return "No"; },
    enabled: function(d) { return "On"; },
    disabled: function(d) { return "Off"; },
    proOnly: function(d) { return "PRO-only"; },
    upgradeToPro: function(d) { return "Upgrade to PRO"; },
    toEnableIt: function(d) { return "to enable it"; }
  },
  landing: {
    yourWebsite: function(d) { return "Your Website"; },
    hiThere: function(d) { return "Hi there! Imagine that you're on your website now."; },
    clickOnChatButton: function(d) { return "Click on our chat button in the bottom-right corner and write something."; },
    youWillReceive: function(d) { return "You will receive this message in Chaport app opened in the previous tab in your browser."; },
    tryToRespond: function(d) { return "Try to respond from there."; }
  },
  languageNames: {
    en: function(d) { return "English"; },
    ru: function(d) { return "Russian"; },
    es: function(d) { return "Spanish"; },
    pt: function(d) { return "Portuguese"; },
    de: function(d) { return "German"; },
    fr: function(d) { return "French"; },
    it: function(d) { return "Italian"; },
    nl: function(d) { return "Dutch"; },
    tr: function(d) { return "Turkish"; },
    et: function(d) { return "Estonian"; },
    pl: function(d) { return "Polish"; },
    vi: function(d) { return "Vietnamese"; },
    lv: function(d) { return "Latvian"; },
    lt: function(d) { return "Lithuanian"; },
    id: function(d) { return "Indonesian"; },
    el: function(d) { return "Greek"; },
    uk: function(d) { return "Ukrainian"; },
    sv: function(d) { return "Swedish"; },
    zh: function(d) { return "Chinese"; },
    "zh-cn": function(d) { return "Chinese (Simplified)"; },
    "zh-tw": function(d) { return "Chinese (Traditional)"; },
    cs: function(d) { return "Czech"; },
    no: function(d) { return "Norwegian"; },
    da: function(d) { return "Danish"; },
    sk: function(d) { return "Slovak"; },
    sl: function(d) { return "Slovenian"; },
    bs: function(d) { return "Bosnian"; },
    sr: function(d) { return "Serbian"; },
    sr_Latn_ME: function(d) { return "Montenegrin"; },
    az: function(d) { return "Azerbaijani"; },
    cy: function(d) { return "Welsh"; }
  },
  login: {
    title: function(d) { return "Welcome to Chaport"; },
    errorEmailRequired: function(d) { return "Email is required"; },
    errorPasswordRequired: function(d) { return "Password is required"; },
    errorInvalidCredentials: function(d) { return "No user with this combination of email and password"; },
    errorInactiveAccount: function(d) { return "Activate your account before logging in"; },
    labelEmail: function(d) { return "Email Address"; },
    labelPassword: function(d) { return "Password"; },
    buttonSubmit: function(d) { return "Log in"; },
    noAccount: function(d) { return "Don't have an account?"; },
    register: function(d) { return "Sign up"; },
    forgotPassword: function(d) { return "Forgot your password?"; },
    resetPassword: function(d) { return "Reset it"; }
  },
  messages: {
    loading: function(d) { return "Loading..."; },
    saving: function(d) { return "Saving..."; },
    saved: function(d) { return "Saved!"; },
    saveError: function(d) { return "Error"; }
  },
  nav: {
    chats: function(d) { return "Chats"; },
    operators: function(d) { return "Operators"; },
    reports: function(d) { return "Reports"; },
    reportsTotalChats: function(d) { return "Total Chats"; },
    reportsAutoInvitations: function(d) { return "Chats by Auto-Invitations"; },
    reportsWorkingHours: function(d) { return "Working Hours"; },
    settings: function(d) { return "Settings"; },
    generalSettings: function(d) { return "General"; },
    installationCode: function(d) { return "Installation Code"; },
    appearance: function(d) { return "Appearance"; },
    visitorData: function(d) { return "Visitor Info"; },
    autoInvitations: function(d) { return "Auto-Invitations"; },
    savedReplies: function(d) { return "Saved Replies"; },
    subscriptions: function(d) { return "Billing"; },
    integrations: function(d) { return "Integrations"; },
    downloads: function(d) { return "Download Apps"; }
  },
  notifications: {
    forcedAway: function(d) { return "Status is set to 'Away'"; },
    forcedAwayBody: function(d) { return "Your status has been changed to 'Away' due to a missed chat."; },
    connectionLost: function(d) { return "Lost connection"; },
    connectionLostBody: function(d) { return "Lost connection to a chat server"; }
  },
  oauth: {
    clientWillHaveAccess: function(d) { return d.client + " will be allowed to:"; },
    switchAccount: function(d) { return "Switch account"; },
    invalidClientIdWarning: function(d) { return "Application, that directed you to this page, probably haven't been properly configured. Please contact its support regarding this issue or send us a message at <a href='https://www.chaport.com' target='_blank'>www.chaport.com</a>."; },
    scopes: {
      visitors_read: function(d) { return "read visitors' info"; },
      chats_read: function(d) { return "read chats"; },
      chats_write: function(d) { return "write to chats"; }
    }
  },
  operators: {
    newTitle: function(d) { return "New Operator"; },
    addOperator: function(d) { return "Add Operator"; },
    backButton: function(d) { return "Operators"; },
    chats: function(d) { return "Chats"; },
    stats: function(d) { return "Stats"; },
    deleteOperator: function(d) { return "Delete"; },
    deleteOperatorConfirmation: function(d) { return "Are you sure you want to delete the operator?"; },
    addPhoto: function(d) { return "Add Photo"; },
    editPhoto: function(d) { return "Edit"; },
    changePhoto: function(d) { return "Change Photo"; },
    choosePhoto: function(d) { return "Choose File..."; },
    deletePhoto: function(d) { return "Delete Photo"; },
    cropResult: function(d) { return "Result:"; },
    errorInactiveAccount: function(d) { return "You have to verify your email address before adding new operators (email with a link was sent upon registration)."; },
    errorNameRequired: function(d) { return "Name is required"; },
    errorEmailRequired: function(d) { return "Email is required"; },
    errorEmailOccupied: function(d) { return "User with this email address is registered already"; },
    errorLanguageRequired: function(d) { return "Language is required"; },
    errorRoleRequired: function(d) { return "Role is required"; },
    name: function(d) { return "Name"; },
    jobTitle: function(d) { return "Job Title"; },
    email: function(d) { return "Email"; },
    language: function(d) { return "Language"; },
    showInWidget: function(d) { return "Show in Chat Widget"; },
    chatLanguages: function(d) { return "Preferred Chat Languages"; },
    role: function(d) { return "Role"; },
    acceptOfflineMessages: function(d) { return "Accept offline messages"; },
    messageSound: function(d) { return "Message Sound"; },
    defaultJobTitle: function(d) { return "Consultant"; },
    activationRequired: function(d) { return "Confirmation is needed."; },
    activationEmailResend: function(d) { return "Send activation email again"; },
    activationEmailResendWait: function(d) { return "You can send email again in " + d.time; },
    operatorsWaitingForSeat: function(d) { return plural(d.count, 0, en, { one: "1 operator is", other: number(d.count, "count") + " operators are" }) + " waiting for a seat"; },
    buyMoreSeats: function(d) { return "Buy More Seats"; },
    workingHours: function(d) { return "Working Hours"; },
    mondayToFriday: function(d) { return "Mon-Fri"; },
    saturdayToSunday: function(d) { return "Sat-Sun"; },
    addWorkingHours: function(d) { return "+ Add Working Hours"; },
    statusAutoUpdate: function(d) { return "Status Auto-Toggle"; },
    daysOff: function(d) { return "Days Off"; },
    dayOff: function(d) { return "Day Off"; },
    showAllDays: function(d) { return "Show All Days"; },
    showDayGroups: function(d) { return "Show Day Groups"; },
    alertEmailResent: function(d) { return "Confirmation email has been sent to the operator's email address."; },
    alertEmailQuotaExceeded: function(d) { return "You've exceeded the hourly/daily quota of adding operators. Please contact support or wait before adding another operator."; },
    roles: {
      operator: function(d) { return "Operator"; },
      admin: function(d) { return "Admin"; },
      owner: function(d) { return "Account Owner"; }
    }
  },
  passwordReset: {
    successMessage: function(d) { return "Your password has been successfully updated."; },
    title: function(d) { return "Create new password"; },
    buttonSubmit: function(d) { return "Update password"; },
    invalidCode: function(d) { return "This password reset link is not working: either it is outdated or has already been used."; }
  },
  passwordResetRequest: {
    successMessage: function(d) { return "Password reset link have just been sent to your email address."; },
    title: function(d) { return "Password reset"; },
    buttonSubmit: function(d) { return "Reset password"; },
    knowPassword: function(d) { return "Know password?"; },
    inactive: function(d) { return "User with this email address has not been activated, please check your email box for an activation email."; },
    noSuchUser: function(d) { return "User with this email address is not registered."; }
  },
  payments: {
    addOperatorsInvoiceDescription: function(d) { return "Add " + plural(d.addedOperators, 0, en, { one: "1 operator", other: number(d.addedOperators, "addedOperators") + " operators" }) + " to current license"; },
    newLicenseInvoiceDescription: function(d) { return plural(d.duration, 0, en, { one: "1 month", other: number(d.duration, "duration") + " months" }) + " PRO license for " + plural(d.q, 0, en, { one: "1 operator", other: number(d.q, "q") + " operators" }); }
  },
  profile: {
    profile: function(d) { return "Profile"; },
    logout: function(d) { return "Log out"; }
  },
  reports: {
    allOperators: function(d) { return "All Operators"; },
    day: function(d) { return "Day"; },
    week: function(d) { return "Week"; },
    lastWeek: function(d) { return "Last week"; },
    lastMonth: function(d) { return "Last month"; },
    chatsServed: function(d) { return "Chats Served"; },
    chatsMissed: function(d) { return "Chats Missed"; },
    byAutoInvitations: function(d) { return "By Auto-Invitations"; },
    incomingChats: function(d) { return "Incoming Chats"; },
    hours: function(d) { return d.value + "h"; },
    minutes: function(d) { return d.value + "m"; },
    seconds: function(d) { return d.value + "s"; }
  },
  reviews: {
    headerPleaseRate: function(d) { return "Enjoying Chaport?"; },
    textPleaseRate: function(d) { return "Tap a star to let us know how you rate it."; },
    btnLater: function(d) { return "Ask Me Later"; },
    btnNever: function(d) { return "Never Ask"; },
    feedbackPlaceholder: function(d) { return "Your Feedback..."; },
    header5: function(d) { return "Thank you so much!"; },
    text5: function(d) { return "Leave a brief review on one of these platforms and get a 15% discount:"; },
    text5contactUsBegin: function(d) { return "After leaving a review, please "; },
    text5contactUsLink: function(d) { return "contact us"; },
    text5contactUsEnd: function(d) { return ", and we'll provide you with a discount for your next payment."; },
    header4: function(d) { return "Thank you!"; },
    header1to3: function(d) { return "We're sorry to hear that"; },
    text1to4: function(d) { return "Please let us know how we can improve Chaport:"; },
    headerFeedbackSubmitted: function(d) { return "Thank you for your feedback!"; },
    textFeedbackSubmitted: function(d) { return "We'll try to make Chaport better."; },
    starTitles: {
      "1": function(d) { return "Awful"; },
      "2": function(d) { return "Bad"; },
      "3": function(d) { return "Fair"; },
      "4": function(d) { return "Good"; },
      "5": function(d) { return "Great"; }
    }
  },
  savedReplies: {
    addNew: function(d) { return "+ Add new reply"; },
    unsavedEdits: function(d) { return "You have unsaved edits."; },
    viewEdits: function(d) { return "View edits"; }
  },
  setup: {
    company: {
      title: function(d) { return "Company Details"; },
      header: function(d) { return "Please tell us about your company:"; },
      industryLabel: function(d) { return "Industry"; },
      employeesLabel: function(d) { return "Company size"; },
      roleLabel: function(d) { return "Your role"; },
      anyOptions: {
        other: function(d) { return "Other"; }
      },
      industryOptions: {
        auto: function(d) { return "Automotive"; },
        edu: function(d) { return "Education"; },
        entertainment: function(d) { return "Entertainment"; },
        finance: function(d) { return "Finance"; },
        games: function(d) { return "Games & Gambling"; },
        nonProfit: function(d) { return "Government / Non-profit"; },
        healthcare: function(d) { return "Healthcare"; },
        humanResources: function(d) { return "Human Resources"; },
        it: function(d) { return "IT"; },
        manufacturing: function(d) { return "Manufacturing"; },
        marketing: function(d) { return "Marketing"; },
        media: function(d) { return "Media & Telecom"; },
        professionalServices: function(d) { return "Professional Services"; },
        realEstate: function(d) { return "Real Estate"; },
        retail: function(d) { return "Retail"; },
        software: function(d) { return "Software"; },
        supportServices: function(d) { return "Support Services"; },
        travel: function(d) { return "Travel"; },
        webApps: function(d) { return "Web Apps"; },
        webHosting: function(d) { return "Web Hosting"; },
        wholesale: function(d) { return "Wholesale"; }
      },
      roleOptions: {
        productManagement: function(d) { return "Product management"; },
        engineering: function(d) { return "Engineering"; },
        design: function(d) { return "Design"; },
        sales: function(d) { return "Sales"; },
        marketing: function(d) { return "Marketing"; },
        customerSupport: function(d) { return "Customer support"; },
        founderCEO: function(d) { return "Founder / CEO"; }
      },
      sizeOptions: {
        size1: function(d) { return "1 – 4 employees"; },
        size5: function(d) { return "5 – 9 employees"; },
        size10: function(d) { return "10 – 49 employees"; },
        size50: function(d) { return "50 – 199 employees"; },
        size200: function(d) { return "200 – 499 employees"; },
        size500: function(d) { return "500 – 999 employees"; },
        size1000: function(d) { return "1,000+ employees"; }
      }
    },
    install: {
      title: function(d) { return "Install Widget"; },
      header: function(d) { return "Install widget on your website:"; },
      description: function(d) { return "Copy the installation code and paste it before &lt;/body&gt; tag on your website:"; },
      emailNote: function(d) { return "Not sure what to do? Send the code to someone who can help you:"; },
      emailLabel: function(d) { return "webmaster@example.com"; },
      emailIsSentNote: function(d) { return "Email with installation code has been sent to " + d.email + "."; },
      getStartedButton: function(d) { return "Get Started"; },
      methodsHeader: function(d) { return "Choose an installation method:"; },
      installationHelp: function(d) { return "Need help?"; },
      installationHelpLink: function(d) { return "https://www.chaport.com/help/installation-on-a-website/install-chaport-on-a-website"; },
      methods: {
        html: function(d) { return "HTML"; },
        wordpress: function(d) { return "WordPress"; },
        joomla: function(d) { return "Joomla"; },
        tagManager: function(d) { return "Google Tag Manager"; }
      }
    },
    profile: {
      title: function(d) { return "Complete Profile"; },
      header: function(d) { return "Please start by completing your profile:"; },
      description1: function(d) { return "Please provide your name and photo (optionally)."; },
      nameLabel: function(d) { return "Full name"; },
      websiteLabel: function(d) { return "Website address"; },
      phoneLabel: function(d) { return "Phone"; }
    },
    welcome: {
      title: function(d) { return "Welcome"; },
      header: function(d) { return "Welcome to Chaport"; },
      description: function(d) { return "Best live chat for websites."; }
    }
  },
  signUp: {
    successTitle: function(d) { return "Thank you!"; },
    successSubtitle: function(d) { return "Please check email to verify your account."; },
    activationEmailResend: function(d) { return "Send activation email again"; },
    activationEmailResendWait: function(d) { return "You can send email again in " + d.time; },
    alertEmailResent: function(d) { return "Activation email has been sent, please check your email"; },
    alertActivationEmailSent: function(d) { return "Account activation email has been sent to your email address"; },
    title: function(d) { return "Sign up with Chaport"; },
    errorNameRequired: function(d) { return "Name is required"; },
    errorEmailRequired: function(d) { return "Email is required"; },
    errorEmailInvalid: function(d) { return "Email is not valid"; },
    errorEmailTaken: function(d) { return "User with this email address is registered already"; },
    errorEmailTakenAndNotActivated: function(d) { return "User with this email address is already registered, email with activation link was sent to this address earlier"; },
    errorPasswordRequired: function(d) { return "Password is required"; },
    errorPasswordInvalid: function(d) { return "Password must be been 6 and 20 characters long"; },
    labelName: function(d) { return "Name"; },
    labelEmail: function(d) { return "Email Address"; },
    labelPassword: function(d) { return "Password"; },
    buttonSubmit: function(d) { return "Sign up"; },
    haveAccount: function(d) { return "Already have an account?"; },
    login: function(d) { return "Log in"; },
    agreeToTerms: function(d) { return "By creating an account you agree to <a href='" + d.termsUrl + "' target='_blank'>Terms and conditions</a> and <a href='" + d.privacyUrl + "' target='_blank'>Privacy Policy</a>"; }
  },
  sounds: {
    beep: function(d) { return "Beep"; },
    beep2: function(d) { return "Beep 2"; },
    drop: function(d) { return "Drop"; },
    glassStick: function(d) { return "Glass stick"; },
    maraca: function(d) { return "Maraca"; },
    maracaLong: function(d) { return "Maraca long"; },
    bellAndBubble: function(d) { return "Bell and bubble"; },
    triplet: function(d) { return "Triplet"; },
    bubble: function(d) { return "Bubble"; },
    wineGlass: function(d) { return "Wine glass"; },
    joy: function(d) { return "Joy"; },
    magic: function(d) { return "Magic"; },
    ios: function(d) { return "iOS"; },
    bellMuted: function(d) { return "Bell muted"; }
  },
  status: {
    online: function(d) { return "Online"; },
    "mobile-online": function(d) { return "Online on Mobile"; },
    offline: function(d) { return "Offline"; },
    away: function(d) { return "Away"; },
    invisible: function(d) { return "Invisible"; },
    "off-online": function(d) { return "Waiting for a seat..."; },
    "off-invisible": function(d) { return "Waiting for a seat..."; }
  },
  subscriptions: {
    yourActivePlan: function(d) { return "Your plan: "; },
    yourNextPlan: function(d) { return "Plan – "; },
    from: function(d) { return "from"; },
    to: function(d) { return "to"; },
    paidOperators: function(d) { return "Paid operators:"; },
    linkAddOperators: function(d) { return "Add operators"; },
    current: function(d) { return "Your current subscription"; },
    currentSubscription: function(d) { return "Current subscription"; },
    noActiveSubscription: function(d) { return "You don't have active subscription plan right now"; },
    unlimited: function(d) { return "unlimited"; },
    unlimitedTrial: function(d) { return "unlimited (trial version)"; },
    trial: function(d) { return "(trial)"; },
    trialEnds: function(d) { return "Trial ends: "; },
    subscriptionPromo: function(d) { return "Upgrade to PRO"; },
    subscriptionTrialPromo: function(d) { return "Subscribe to PRO"; },
    subscriptionStatus: function(d) { return "Subscription status: "; },
    paymentPlan: function(d) { return "Payment plan"; },
    annualPayment: function(d) { return "Annual payment"; },
    monthlyPayment: function(d) { return "Monthly payment"; },
    perOperatorPerMonth: function(d) { return "per operator/month"; },
    monthlyDiscount: function(d) { return "Saving " + d.monthlyDiscount + "%"; },
    monthlyDiscountMotivator: function(d) { return "Save " + d.monthlyDiscount + "% with annual payment"; },
    buyNext: function(d) { return "Pay for the next period"; },
    daysLeftCount: function(d) { return "(" + plural(d.daysLeft, 0, en, { one: "1 day", other: number(d.daysLeft, "daysLeft") + " days" }) + " left)"; },
    validUntil: function(d) { return "Valid until: "; },
    priceFrom: function(d) { return "(from " + d.price + "/month)"; },
    alreadyPaidForNext: function(d) { return "You also paid for a next subscription:"; },
    recurrent: function(d) { return "Your card will be automatically charged at the end of the license term."; },
    updateSubscription: function(d) { return "Update payment method"; },
    cancelSubscription: function(d) { return "Cancel subscription"; },
    contactAdminForPro: function(d) { return "Please, contact account administrator to upgrade to PRO."; },
    contactAdminToUpdateSubscription: function(d) { return "Please, contact account administrator to update the subscription."; },
    productName: function(d) { return "Chaport PRO for " + plural(d.q, 0, en, { one: "1 operator", other: number(d.q, "q") + " operators" }) + " billed " + select(d.duration, { "1": "monthly", "12": "annually", other: "every " + "#" + " months" }); },
    paymentProcessing: function(d) { return "Thank you for choosing Chaport PRO as your subscription plan! Your payment have gone through, but not processed yet. Generally processing takes no more than a couple of minutes."; },
    alertPaymentProcessed: function(d) { return "Your payment has been successfully processed. PRO-subscription is now ON!"; },
    updated: function(d) { return "Your subscription has been successfully updated."; },
    canceled: function(d) { return "Your subscription has been successfully canceled."; },
    canceledStatus: function(d) { return "Canceled"; },
    billingCycle: function(d) { return "Billing cycle:"; },
    nextBillingDate: function(d) { return "Next billing date: "; },
    currentSubscriptionHeading: function(d) { return "Chaport PRO for " + plural(d.q, 0, en, { one: "1 operator", other: number(d.q, "q") + " operators" }); },
    currentSubscriptionDetails: function(d) { return d.price + " every " + plural(d.duration, 0, en, { "1": "month", "12": "year", other: number(d.duration, "duration") + " months" }); },
    changePlan: function(d) { return "Change plan"; },
    cancelSubscriptionConfirmation: function(d) { return "Please don't cancel the subscription if you need to change the number of operators or the billing cycle. Click on the \"Change plan\" button instead.\n\nAre you sure you want to cancel your subscription?"; },
    contactUs: function(d) { return "Please <a href=\"https://www.chaport.com/contact-us\" target=\"_blank\">contact us</a> to downgrade your plan"; },
    addOperators: {
      title: function(d) { return "Active License Extension"; },
      description: function(d) { return "Specify how many operators you wish to add."; },
      labels: {
        total: function(d) { return "Total amount"; },
        count: function(d) { return "Operators " + "#"; }
      },
      notes: {
        currentLicense: function(d) { return "Your active license for " + plural(d.q, 0, en, { one: "1 operator", other: number(d.q, "q") + " operators" }) + " is paid up to " + d.validTo + " (" + plural(d.daysLeft, 0, en, { one: "1 day", other: number(d.daysLeft, "daysLeft") + " days" }) + " left)."; },
        discount: function(d) { return "Discount you received during initial purchase for " + plural(d.duration, 0, en, { one: "1 month", other: number(d.duration, "duration") + " months" }) + " (" + d.discount + ") is also applied when adding new operators."; },
        perOperatorPrice: function(d) { return "Price per operator: " + d.monthPrice + "/month (" + d.dayPrice + "/day)"; },
        perOperatorTotal: function(d) { return plural(d.payForDays, 0, en, { one: "1 day", other: number(d.payForDays, "payForDays") + " days" }) + " &times; " + d.dayPrice + " per added operator"; }
      }
    },
    changePlanAlerts: {
      success: function(d) { return "Your subscription plan has been successfully changed"; },
      error: function(d) { return "Plan change failed, please try again later"; }
    },
    free: {
      limited: function(d) { return "Limited version"; },
      planName: function(d) { return "Free"; },
      conditions: function(d) { return "1 operator seat, 30-day chat history, limited functionality"; }
    },
    freePre2020: {
      planName: function(d) { return "Free"; },
      conditions: function(d) { return "5 operators, limited functionality"; }
    },
    newLicense: {
      title: function(d) { return "New license"; },
      timeframe: function(d) { return "License will be active from " + d.from + " to " + d.to; },
      optionMonth: function(d) { return plural(d.months, 0, en, { one: "1 month", other: number(d.months, "months") + " months" }) + " " + plural(d.discount, 0, en, { "0": "", other: "(-" + number(d.discount, "discount") + "%)" }); },
      pricePerOperator: function(d) { return d.price + " per operator per month"; },
      labels: {
        duration: function(d) { return "Subscription period"; },
        count: function(d) { return "Operator seats"; },
        total: function(d) { return "Total amount"; },
        preview: function(d) { return "Preview"; }
      }
    },
    payment: {
      converted: function(d) { return "You will be charged in " + d.currencyTo + ". " + d.currencyFrom + "/" + d.currencyTo + " = " + d.xrate; },
      goto: function(d) { return "Proceed to payment"; },
      secure: function(d) { return "Secure connection"; },
      title: function(d) { return "Payment"; },
      submit: function(d) { return "Pay"; },
      alerts: {
        success: function(d) { return "Your payment has successfully gone through"; },
        externalError: function(d) { return "Payment failed, please try again later"; },
        "3dSecureRedirect": function(d) { return "Redirecting to your bank to proceed with the payment"; },
        internalError: function(d) { return "Payment failed, please try again later"; },
        serverConnectionError: function(d) { return "Payment failed, please try again later"; }
      },
      labels: {
        card: function(d) { return "Card number"; },
        name: function(d) { return "Cardholder name"; },
        expDate: function(d) { return "Valid thru MM/YY"; }
      }
    },
    previewPrice: {
      negativeAmount: function(d) { return "You'll have a credit balance of " + d.creditBalance + " and will be billed " + d.immediatePayment + " on " + d.date + ". Once the credit balance is used up, your recurring billing amount will be " + d.recurringBillingAmount + " every " + plural(d.duration, 0, en, { "1": "month", "12": "year", other: number(d.duration, "duration") + " months" }); },
      positiveAmount: function(d) { return "You'll be billed " + d.immediatePayment + " on " + d.date + " and " + d.recurringBillingAmount + " every " + plural(d.duration, 0, en, { "1": "month", "12": "year", other: number(d.duration, "duration") + " months" }); }
    },
    pro: {
      buy: function(d) { return "Purchase PRO-version"; },
      planName: function(d) { return "PRO"; },
      features: {
        header: function(d) { return "These features will be available to you:"; },
        itemAutoInvitations: function(d) { return "Auto-Invitations"; },
        itemVisitorInfo: function(d) { return "Visitor information"; },
        itemTypingInsight: function(d) { return "Typing insights"; }
      }
    }
  },
  visitorData: {
    fields: function(d) { return "Visitor Info Fields"; },
    prechat: function(d) { return "Pre-chat Form"; },
    emailRequest: function(d) { return "In-chat Email Request"; },
    visitorDataFieldsNote: function(d) { return "You can add custom fields, hide or reorder fields in the visitor info panel."; },
    fieldNameLabel: function(d) { return "Name"; },
    fieldKeyLabel: function(d) { return "API Key"; },
    fieldTypeLabel: function(d) { return "Type"; },
    fieldCheckboxTextLabel: function(d) { return "Text"; },
    fieldOptionsLabel: function(d) { return "Options"; },
    fieldHiddenLabel: function(d) { return "Hidden"; },
    fieldRequiredLabel: function(d) { return "Required"; },
    fieldOptionalLabel: function(d) { return "Optional"; },
    fieldInvalidLabel: function(d) { return "Invalid"; },
    addNewField: function(d) { return "+ Add new field"; },
    addNewOption: function(d) { return "+ Add option"; },
    prechatFormFields: function(d) { return "Pre-chat Form Fields"; },
    showPrechatForm: function(d) { return "Show Pre-chat Form"; },
    newField: function(d) { return "New Field"; },
    editField: function(d) { return "Edit Field"; },
    deleteField: function(d) { return "Delete Field"; },
    selectField: function(d) { return "Choose field..."; },
    duplicateKey: function(d) { return "A field with this API key already exists"; },
    visitorFieldsNotifyProOnly: function(d) { return "To customize visitor info fields,<a href=\"" + "#" + "/settings/subscriptions\">upgrade to PRO.</a>"; },
    prechatNotifyProOnly: function(d) { return "To enable pre-chat form,<a href=\"" + "#" + "/settings/subscriptions\">upgrade to PRO.</a>"; },
    types: {
      text: function(d) { return "Single-line text"; },
      multilineText: function(d) { return "Multi-line text"; },
      link: function(d) { return "Link"; },
      versionedEntity: function(d) { return "Single-line text"; },
      email: function(d) { return "Email"; },
      choice: function(d) { return "Choice"; },
      checkbox: function(d) { return "Checkbox"; },
      phone: function(d) { return "Phone"; }
    }
  },
  welcome: {
    welcomeToChaport: function(d) { return "Welcome to Chaport"; },
    goodOldBrag: function(d) { return "Live chat built to be convenient."; },
    agreeToTerms: function(d) { return "By clicking Continue you agree to <a href='" + d.termsUrl + "' target='_blank'>Terms and conditions</a> and <a href='" + d.privacyUrl + "' target='_blank'>Privacy Policy</a>."; },
    "continue": function(d) { return "Continue"; }
  },
  widget: {
    messageEdited: function(d) { return "Edited"; },
    messageSent: function(d) { return "Sending..."; },
    messageRead: function(d) { return "Read"; },
    messageDelivered: function(d) { return "Sent. Unread"; },
    currentlyOnlineText: function(d) { return "We are online and ready to help!"; },
    recentlyActiveText: function(d) { return "Send us a message. We will reply as soon as we can!"; },
    currentlyOnline: function(d) { return "Online"; },
    lastActiveInMinutes: function(d) { return "Last active less than " + plural(d.minutes, 0, en, { one: "1 minute", other: number(d.minutes, "minutes") + " minutes" }) + " ago"; },
    lastActiveInHours: function(d) { return "Last active less than " + plural(d.hours, 0, en, { one: "1 hour", other: number(d.hours, "hours") + " hours" }) + " ago"; },
    lastActiveRecently: function(d) { return "Last active recently"; },
    inputLabel: function(d) { return "Type a message here..."; },
    chatLabel: function(d) { return "Live Chat"; },
    cancelLabel: function(d) { return "Cancel"; },
    emailRequestText: function(d) { return "Get notified of a reply here and via email:"; },
    emailDefinedText: function(d) { return "You will be notified of a reply here and by email:"; },
    emailRequestEdit: function(d) { return "edit"; },
    emailRequestEmailRequired: function(d) { return "Please enter your email address."; },
    emailRequestEmailInvalid: function(d) { return "This does not look like email address."; },
    acceptPrivacyPolicy: function(d) { return "I agree to"; },
    acceptPrivacyPolicyLinkText: function(d) { return "Privacy Policy"; },
    privacyPolicyShouldBeAccepted: function(d) { return "You have to accept Privacy Policy"; },
    conversationDeleted: function(d) { return "This chat has been deleted by an operator."; },
    refreshToStartNewConversation: function(d) { return "Refresh the page to start a new chat."; },
    joined: function(d) { return "joined"; },
    teamTitleDefault: function(d) { return "Customer Support"; },
    poweredBy: function(d) { return "Powered by"; },
    consent: {
      yesPlease: function(d) { return "Yes, please"; },
      noThanks: function(d) { return "No, thanks"; },
      chooseOption: function(d) { return "Please answer the question:"; },
      gdprInformDefaultText: function(d) { return "We use provided personal data for support purposes only"; },
      marketingPermissionDefaultText: function(d) { return "Would you like to hear about our offers and services?"; }
    }
  },
  widgetDummy: {
    today: function(d) { return "Today"; },
    operatorName: function(d) { return "Jessica Parker"; },
    jobTitle: function(d) { return "Consultant"; },
    visitorMessage0: function(d) { return "Hello!"; },
    visitorMessage0Time: function(d) { return "10:01"; },
    visitorMessage1: function(d) { return "Do you have available iPhone 6S 128gb?"; },
    visitorMessage1Time: function(d) { return "10:01"; },
    operatorMessage1: function(d) { return "Yes, we have this model in stock"; },
    operatorMessage1Time: function(d) { return "10:02"; },
    visitorMessage2: function(d) { return "Thanks! I'll take two! 😀"; },
    visitorMessage2Time: function(d) { return "10:03"; }
  }
}
;
