# VRCX Hive

This is just for fun, will never go to master.

Sends all online friend locations to a database, when opening a world/user dialog a list of users inside that instance will be loaded from the database.

# VRCX PyPyDance Companion

[Download](https://github.com/Natsumi-sama/VRCX/releases/)

Requires `--enable-sdk-log-levels` VRChat launch parameter for logging of user requesting video.

**PyPyDance Discord rich presence:**

![image](https://user-images.githubusercontent.com/11171153/101809013-ec83aa00-3b7b-11eb-9167-007825807252.png)

In order to use this you need to disable VRChat's built in [RPC](https://docs.vrchat.com/docs/configuration-file#rich-presence) this can be done wtih `{ "disableRichPresence": true }` inside of `%AppData%\..\LocalLow\VRChat\vrchat\config.json`

**Extra features:**

![image](https://user-images.githubusercontent.com/11171153/97168742-d600d980-17ed-11eb-844f-57273d5e590d.png)

**Now playing information:**

![image](https://user-images.githubusercontent.com/11171153/97169650-42c8a380-17ef-11eb-95b0-a85c51a8de07.png)

**Video progress overlay:**

![image](https://user-images.githubusercontent.com/11171153/97169618-347a8780-17ef-11eb-924a-06c2407f479d.png)

Comes with [nircmd](https://www.nirsoft.net/utils/nircmd.html) for automatically adjusting Windows volume mixer to normalize volume of videos.






# VRCX

VRCX is an assistant application for VRChat that provides information about and managing friendship. This application uses the unofficial VRChat API (VRCSDK).

VRCX isn't endorsed by VRChat and doesn't reflect the views or opinions of VRChat or anyone officially involved in producing or managing VRChat. VRChat is trademark of VRChat Inc. VRChat © VRChat Inc.

pypy is not responsible for any problems caused by VRCX. ***Use at your own risk!***

![image](https://user-images.githubusercontent.com/25771678/64982044-40abca00-d8f8-11e9-8e2e-a68933ab095d.png)

Special comments about VRChatRPC.DLL
-
VRChatRPC.DLL is used to login VRChat via your **Steam account**. (If you press the Steam login button on the login page)

If you don't need to login via Steam, VRChatRPC.DLL will not be used.

In detail, VRChatRPC.DLL accesses the VRChat Process (DLL Injection) and calls the Steam API to obtain the Login Token. This may lead to BAN from VRChat.

No technical measures have been taken on security yet (Of course I can't say there's no risk, but there's no problem), but I don't know what will happen later.

Since it is impossible to login to a 3rdparty account in the usual way, so this is the only way.

It's source code is available at https://github.com/pypy-vrc/VRChatRPC.

Screenshots
=
![2fa](https://user-images.githubusercontent.com/25771678/63169786-a810f880-c072-11e9-9ede-0a3a03d5da12.png)
![01feed](https://user-images.githubusercontent.com/25771678/63169780-a6dfcb80-c072-11e9-85f9-2e7c816633a2.png)
![02gamelog](https://user-images.githubusercontent.com/25771678/63169782-a7786200-c072-11e9-9221-bdc13ddbec5b.png)
![03search](https://user-images.githubusercontent.com/25771678/63169787-a810f880-c072-11e9-94fb-af3ed02fa5da.png)
![note](https://user-images.githubusercontent.com/25771678/63212073-77949180-c13a-11e9-9d8e-a3db64f55b47.png)
![09w1](https://user-images.githubusercontent.com/25771678/63170557-8153c180-c074-11e9-8f89-9b1a61b7912f.png)
![09w2](https://user-images.githubusercontent.com/25771678/63170559-81ec5800-c074-11e9-8549-efd2d7843ca1.png)
![04fav](https://user-images.githubusercontent.com/25771678/63169788-a8a98f00-c072-11e9-9257-8d910880b4a3.png)
![05fr](https://user-images.githubusercontent.com/25771678/63169789-a9422580-c072-11e9-8ccd-e2ef45dc8842.png)
![06mo](https://user-images.githubusercontent.com/25771678/63169791-a9dabc00-c072-11e9-9e12-04ab009939b2.png)
![07no](https://user-images.githubusercontent.com/25771678/63169792-aa735280-c072-11e9-92fc-f210de74865d.png)
![08op1](https://user-images.githubusercontent.com/25771678/63169793-ab0be900-c072-11e9-9d57-23bff5b44f86.png)
![08op2](https://user-images.githubusercontent.com/25771678/63169797-aba47f80-c072-11e9-8672-f055fa4bdc0f.png)
![08op3](https://user-images.githubusercontent.com/25771678/63169798-aba47f80-c072-11e9-82ac-41c58af74946.png)
![invite](https://user-images.githubusercontent.com/25771678/63169801-ac3d1600-c072-11e9-9350-3f244eba52eb.png)
![join](https://user-images.githubusercontent.com/25771678/63169804-acd5ac80-c072-11e9-8006-f49c41869156.png)
![newin](https://user-images.githubusercontent.com/25771678/63169806-ad6e4300-c072-11e9-96a4-89677141abfb.png)
![dis](https://user-images.githubusercontent.com/25771678/63170206-c62b2880-c073-11e9-836c-482f8a0935a0.png)
![noty1](https://user-images.githubusercontent.com/25771678/63169808-ae06d980-c072-11e9-93e9-fcc13312872b.PNG)
![noty2](https://user-images.githubusercontent.com/25771678/63169810-ae9f7000-c072-11e9-818b-dd419213420b.PNG)

# How to build VRCX

* Get source code
    * Download latest source code [zip](https://github.com/pypy-vrc/VRCX/archive/master.zip) or clone repo with `git clone`.

* Build .NET
    * Install [Visual Studio](https://visualstudio.microsoft.com/) if it's not already installed.
    * In Visual Studio "Open Project/Solution" and browse to the [Solution file](https://docs.microsoft.com/en-us/visualstudio/extensibility/internals/solution-dot-sln-file) provided inside the downloaded source code.
    * Restore [NuGet](https://docs.microsoft.com/en-us/nuget/consume-packages/package-restore#restore-packages-automatically-using-visual-studio) packages.
    * [Build](https://docs.microsoft.com/en-us/visualstudio/ide/building-and-cleaning-projects-and-solutions-in-visual-studio) Solution.

* Build Node.js
    * Download and install [Node.js](https://nodejs.org/en/download/).
    * Run `build-node.js.cmd`.
    * Run `make-junction.cmd`.

* Create release zip
    * Run `make-zip.cmd` for [Bandizip](https://www.bandisoft.com/bandizip) or `make-zip-7z.cmd` for [7-Zip](https://www.7-zip.org).
