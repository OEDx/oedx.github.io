var delay=100
var fcontent=new Array()
begintag='<font face="Consolas,Monaco,monospace" size=1>'
 
fcontent[0]="                                  :;q:            <br>                         .:r7JY51FJJNU            <br>                   :jXBBBMMPSjYv7ii:jE            <br>                vBBBGY:.   ..,::i;irMB            <br>              PBBq:             .,:i0BSJL:,..     <br>            vBq,                   ..,75PPFB1     <br>          :Mj   7i.   .:i           7r.,:,L8      <br>         JM:.    rUEMBBZvuLLY7r7,    jF,,7B,      <br>        1Z i7     L;:,.  :0v1r:i:     U1:Bv       <br>       ;B ,E              .J:r.        ZBB        <br>       B::Mi                U:Y:        B         <br>      :B Li                 .j.u:       O:        <br>      kBB         :r         ,L.2.      qU        <br>      BB7      .i5MM          7i.U      YF        <br>      B2i      SBUq7           j :L     kU        <br>      qB,       2NP.           :r Y,    B7        <br>      rB.        0B             Y .L   .B         <br>       B:        .L             :i r   BM         <br>       ;B                        r  : UB          <br>      ,:BB:                      ;  .EB.          <br>    iM2i:uBB                       .BB.           <br>   ,B.     FBF: :,             :,iBBJ             <br>   YB      :B7NBB               5BY               <br>   ,B.    iBF  BM                Yi               <br>    7BL     NMOBr              :  Br              <br>     :BB;      B.              L:  B              <br>       :BBF    B               ,k  ES             <br>         .1BNjBB                0  .B             <br>             :BY                P.  Bi            <br>" 
fcontent[1]="                                  ,iS:            <br>                         .:i7YLUU2LLkj            <br>                   :Y5MMBEEF1YL7ri:,YP            <br>                7BBBqv:.   ..,:::i:;ZB            <br>              FBBS,             ..::XB1L7:...     <br>            7BF,                   ..,rUFFUBu     <br>          :EY   ri.   .:i           rr.,:,7N      <br>         LG:.    iYXZM8P7Y77L7;r,    YU,.rB,      <br>        Uq i7     7i:,.  :X7u;:i:     Ju:B7       <br>       iB ,P              .L,r.        qBO        <br>       B::Ei                J:L:        B         <br>      :M 7:                 .Y.Y:       0:        <br>      1BM         ,i         ,v.u.      SJ        <br>      BMr      .iU8G          r:.J      vU        <br>      Mji      1Mjkr           Y :v     1J        <br>      FO.       jkF.           :r v.    Mr        <br>      ;B.        kB             L .7   .B         <br>       B:        .7             ,: ;   BE         <br>       rB                        ;  : JB          <br>        ZB                       i  .XB.          <br>     75FGBBr                       .BB            <br>   .MU.   FBBX: ,.             :,iBBY             <br>   2j      E0LGBB               UBL               <br>   5Y     .B:  XB                vi               <br>   .Bi    :u8Y0Br              :  M;              <br>    ,B8:     :.B.              v:  B              <br>      7MBY.    B               ,1  P2             <br>        .uMBY,7M                k  .B             <br>            :YBL                F.  Bi            <br>" 
fcontent[2]="                                  :;q:            <br>                         .:r7JY51FJJNU            <br>                   :jXBBBMMPSjYv7ii:jE            <br>                vBBBGY:.   ..,::i;irMB            <br>              PBBq:             .,:i0BSJL:,..     <br>            vBq,                   ..,75PPFB1     <br>          :Mj   7i.   .:i           7r.,:,L8      <br>         JM:.    rUEMBBZvuLLY7r7,    jF,,7B,      <br>        1Z i7     L;:,.  :0v1r:i:     U1:Bv       <br>       ;B ,E              .J:r.        ZBB        <br>       B::Mi                U:Y:        B         <br>      :B Li                 .j.u:       O:        <br>      kBB         :r         ,L.2.      qU        <br>      BB7      .i5MM          7i.U      YF        <br>      B2i      SBUq7           j :L     kU        <br>      qB,       2NP.           :r Y,    B7        <br>      rB.        0B             Y .L   .B         <br>       B:        .L             :i r   BM         <br>       ;B                        r  : UB          <br>      ,:BB:                      ;  .EB.          <br>    iM2i:uBB                       .BB.           <br>   ,B.     FBF: :,             :,iBBJ             <br>   YB      :B7NBB               5BY               <br>   ,B.    iBF  BM                Yi               <br>    7BL     NMOBr              :  Br              <br>     :BB;      B.              L:  B              <br>       :BBF    B               ,k  ES             <br>         .1BNjBB                0  .B             <br>             :BY                P.  Bi            <br>" 
fcontent[3]="                                  ,ik:            <br>                         .:i7LLUUUYLkj            <br>                   :Y1MMBEEF2YL7ri:,YX            <br>                7BBBqL:.   ..,,::i:iZB            <br>              kBBS:             ..::PB2L7:,..     <br>            7BS,                   ..,rU5F2Bj     <br>          :ZY   ri.   .:i           7;.,:,7N      <br>         LG:.    iYXZB8q7Y7vL7rr,    Y2..rB.      <br>        UP i7     vi:,.  :k7Ui:i:     Ju,B7       <br>       iB ,X               L:r.        NBO        <br>       B::Ei                Y:Y:        B         <br>      :M 7:                 .Y.J:       N:        <br>      1BM         ,i         ,v.j.      kj        <br>      BMr      .iU88          ri.Y      LU        <br>      Mji      2Mjkr           L :7     5J        <br>      F8.       jkS.           :; v.    Br        <br>      ;B.        kM             v .7    B         <br>       B:        .7             ,i ;   BE         <br>       rB                        ;  : YB          <br>        ZB                       i  .kB.          <br>     7FF8BBr                       .BB            <br>   .Mu.   FBBX: ,.             ,.iBBY             <br>   2u      ENv8BB               UBL               <br>   FY     .B:  kB                vi               <br>   .Bi    :j8YEB7              :  M;              <br>    ,BO:     :.B.              7:  B              <br>      rOBY.    B               ,1  X2             <br>        .jMBY.7M                k  .B             <br>            iLBL                F.  Bi            <br>" 
fcontent[4]="                                  ,;q:            <br>                         .:rvYJF55jJNU            <br>                   :jkBBBMMPSjY77ii:jE            <br>                vBBBZY:.   ..:::i;irMB            <br>              qBBq:             .,::EBSjL:,..     <br>            vBN:                   ..,r5XPSB2     <br>          :Mu   7i.   .:i           7r.,::L8      <br>         JM:.    rU0MBBZLuvYY7r7,    jS,,7B,      <br>        5E iv     Lri:.  :NL1r:i:     U1:Bv       <br>       rB ,0              .Y:r.        GBB        <br>       B::Mi               .u:J:        B         <br>      :B Li                 .j.U:       8:        <br>      kBB         :r         ,Y.U.      NU        <br>      BB7      .i5MB          7i.U      Y5        <br>      B2i      SB2N7           J :L     XU        <br>      PB,       2Nq.           :r L,    B7        <br>      rB.        0B             Y .v   .B         <br>       B:        .L             :i r.  BM         <br>       iB                        r  : UB          <br>      ,:BB:                      ;  .0B.          <br>    iM1i:jBB                       .BB.           <br>   ,B.     SBS: :,             :,iBBJ             <br>   YB      :B70BB               5BY               <br>   :B,    iBF  MM                L;               <br>    7BL     NMOB7              :  Br              <br>     ,BB;      B.              L:  B              <br>       :BBF    B               :S  0F             <br>         .5BNJBB                0  .B             <br>             ,BY                P.  Bi            <br>" 
fcontent[5]="                                  ,ik:            <br>                         .:i7LLUUUYLkj            <br>                   :Y1MMBEEF2YL7ri:,YX            <br>                7BBBqL:.   ..,,::i:iZB            <br>              kBBS:             ..::PB2L7:,..     <br>            7BS,                   ..,rU5F2Bj     <br>          :ZY   ri.   .:i           7;.,:,7N      <br>         LG:.    iYXZB8q7Y7vL7rr,    Y2..rB.      <br>        UP i7     vi:,.  :k7Ui:i:     Ju,B7       <br>       iB ,X               L:r.        NBO        <br>       B::Ei                Y:Y:        B         <br>      :M 7:                 .Y.J:       N:        <br>      1BM         ,i         ,v.j.      kj        <br>      BMr      .iU88          ri.Y      LU        <br>      Mji      2Mjkr           L :7     5J        <br>      F8.       jkS.           :; v.    Br        <br>      ;B.        kM             v .7    B         <br>       B:        .7             ,i ;   BE         <br>       rB                        ;  : YB          <br>        ZB                       i  .kB.          <br>     7FF8BBr                       .BB            <br>   .Mu.   FBBX: ,.             ,.iBBY             <br>   2u      ENv8BB               UBL               <br>   FY     .B:  kB                vi               <br>   .Bi    :j8YEB7              :  M;              <br>    ,BO:     :.B.              7:  B              <br>      rOBY.    B               ,1  X2             <br>        .jMBY.7M                k  .B             <br>            iLBL                F.  Bi            <br>" 
fcontent[6]="                                  ,;q:            <br>                         .:rvYJF55jJNU            <br>                   :jkBBBMMPSjY77ii:jE            <br>                vBBBZY:.   ..:::i;irMB            <br>              qBBq:             .,::EBSjL:,..     <br>            vBN:                   ..,r5XPSB2     <br>          :Mu   7i.   .:i           7r.,::L8      <br>         JM:.    rU0MBBZLuvYY7r7,    jS,,7B,      <br>        5E iv     Lri:.  :NL1r:i:     U1:Bv       <br>       rB ,0              .Y:r.        GBB        <br>       B::Mi               .u:J:        B         <br>      :B Li                 .j.U:       8:        <br>      kBB         :r         ,Y.U.      NU        <br>      BB7      .i5MB          7i.U      Y5        <br>      B2i      SB2N7           J :L     XU        <br>      PB,       2Nq.           :r L,    B7        <br>      rB.        0B             Y .v   .B         <br>       B:        .L             :i r.  BM         <br>       iB                        r  : UB          <br>      ,:BB:                      ;  .0B.          <br>    iM1i:jBB                       .BB.           <br>   ,B.     SBS: :,             :,iBBJ             <br>   YB      :B70BB               5BY               <br>   :B,    iBF  MM                L;               <br>    7BL     NMOB7              :  Br              <br>     ,BB;      B.              L:  B              <br>       :BBF    B               :S  0F             <br>         .5BNJBB                0  .B             <br>             ,BY                P.  Bi            <br>" 
fcontent[7]="                                  ,ik:            <br>                         .:i7LLUUUYLkj            <br>                   :Y1MMBEEF2YL7ri:,YX            <br>                7BBBqL:.   ..,,::i:iZB            <br>              kBBS:             ..::PB2L7:,..     <br>            7BS,                   ..,rU5F2Bj     <br>          :ZY   ri.   .:i           7;.,:,7N      <br>         LG:.    iYXZB8q7Y7vL7rr,    Y2..rB.      <br>        UP i7     vi:,.  :k7Ui:i:     Ju,B7       <br>       iB ,X               L:r.        NBO        <br>       B::Ei                Y:Y:        B         <br>      :M 7:                 .Y.J:       N:        <br>      1BM         ,i         ,v.j.      kj        <br>      BMr      .iU88          ri.Y      LU        <br>      Mji      2Mjkr           L :7     5J        <br>      F8.       jkS.           :; v.    Br        <br>      ;B.        kM             v .7    B         <br>       B:        .7             ,i ;   BE         <br>       rB                        ;  : YB          <br>        ZB                       i  .kB.          <br>     7FF8BBr                       .BB            <br>   .Mu.   FBBX: ,.             ,.iBBY             <br>   2u      ENv8BB               UBL               <br>   FY     .B:  kB                vi               <br>   .Bi    :j8YEB7              :  M;              <br>    ,BO:     :.B.              7:  B              <br>      rOBY.    B               ,1  X2             <br>        .jMBY.7M                k  .B             <br>            iLBL                F.  Bi            <br>" 
fcontent[8]="                                  ,;q:            <br>                         .:rvYJF55jJNU            <br>                   :jkBBBMMPSjY77ii:jE            <br>                vBBBZY:.   ..:::i;irMB            <br>              qBBq:             .,::EBSjL:,..     <br>            vBN:                   ..,r5XPSB2     <br>          :Mu   7i.   .:i           7r.,::L8      <br>         JM:.    rU0MBBZLuvYY7r7,    jS,,7B,      <br>        5E iv     Lri:.  :NL1r:i:     U1:Bv       <br>       rB ,0              .Y:r.        GBB        <br>       B::Mi               .u:J:        B         <br>      :B Li                 .j.U:       8:        <br>      kBB         :r         ,Y.U.      NU        <br>      BB7      .i5MB          7i.U      Y5        <br>      B2i      SB2N7           J :L     XU        <br>      PB,       2Nq.           :r L,    B7        <br>      rB.        0B             Y .v   .B         <br>       B:        .L             :i r.  BM         <br>       iB                        r  : UB          <br>      ,:BB:                      ;  .0B.          <br>    iM1i:jBB                       .BB.           <br>   ,B.     SBS: :,             :,iBBJ             <br>   YB      :B70BB               5BY               <br>   :B,    iBF  MM                L;               <br>    7BL     NMOB7              :  Br              <br>     ,BB;      B.              L:  B              <br>       :BBF    B               :S  0F             <br>         .5BNJBB                0  .B             <br>             ,BY                P.  Bi            <br>" 
fcontent[9]="                                                  <br>                             .,ii7Lk;             <br>                   ,7JPGO8O0E0Zk1Jvu8             <br>                JBB8uvi:.....,.::::LG             <br>              EBBU.             ..:1B.            <br>            7BF.                   .7SqG1JL.      <br>          :EJ    i7:.  .::.          .:;LUB.      <br>         JM. i    .YXZ8M85LULYi;:,    i.:E:       <br>        UP  L:     :r,,...,LJj7:L7    :77M        <br>       iM  F1               ::..       1Br        <br>       B. SO:                :;::       B         <br>      :B.XL                   :i::      0i        <br>      qBMr         r7          i::i     kU        <br>      BB:.      ,jNBk           r.:.    L2        <br>      MU:       NEJ1:           .:.:    1j        <br>      q8,        ZUF             ;..:   Br        <br>      7B:        .BM             .i :   B         <br>       BL         ir              i  . BZ         <br>       iB.                        :.  uB          <br>        EB                         . XB.          <br>     7FF8BBr                       iBB            <br>   .Mu.   FBBX: ::             ,.,ZBY             <br>   2u      ENLOBB               2BJ               <br>   FY     .B:  XM                L;               <br>   .Bi    :j8YEB7              :  Zi              <br>    ,BO:     :.B.              r, .B              <br>      rOBY.    B               .J  Pu             <br>        .jMBY.rM                X  .B             <br>            iLBJ                k   Br            <br>" 
fcontent[10]="                                                  <br>                                 .,.              <br>                   ,77J1F2SXZqEN0X8G              <br>                78BMNU7rii:i:i:i::rO              <br>              FBq:              ..UB              <br>            LBj   .               .FP5Lr,.        <br>          iOY     iv7:,,,:i,        .iU508        <br>         JM. .7     :UX0S17r7rri::     ,YX        <br>        2O  ,k.      :,   ..iJu277r    .Gr        <br>       rB  7Bv               .:,,      rB.        <br>       B  iX7                 .rii.     B         <br>      :M Pk                    .7:i.    Mi        <br>      EBBj.        .7j          ,r,;.   PY        <br>      BNi:       Yq0ZM           ::.i   Lj        <br>      O::i.      2GL8L            r..:  FL        <br>      X2:i        U0G             .; :  Br        <br>      7Bi:.        EB              i  ,.B         <br>       BU:          .              .: .BN         <br>       iBr.                         i 1B          <br>      ::BBX                         .EB.          <br>    iOU:,7BB                       ,BB            <br>   ,B.     FBq: :,             :,:MBL             <br>   YB      :B78BB               kBj               <br>   :B,    :Bu  ZO                Li               <br>    rB7     XENBL              :  8i              <br>     ,BB;      B.              7, .B              <br>       :MB5    B               ,u  N5             <br>         .2BPYBB                q  .B             <br>             ,Bj                q   Bi            <br>" 
fcontent[11]="                                                  <br>                             .,ii7Lk;             <br>                   ,7JPGO8O0E0Zk1Jvu8             <br>                JBB8uvi:.....,.::::LG             <br>              EBBU.             ..:1B.            <br>            7BF.                   .7SqG1JL.      <br>          :EJ    i7:.  .::.          .:;LUB.      <br>         JM. i    .YXZ8M85LULYi;:,    i.:E:       <br>        UP  L:     :r,,...,LJj7:L7    :77M        <br>       iM  F1               ::..       1Br        <br>       B. SO:                :;::       B         <br>      :B.XL                   :i::      0i        <br>      qBMr         r7          i::i     kU        <br>      BB:.      ,jNBk           r.:.    L2        <br>      MU:       NEJ1:           .:.:    1j        <br>      q8,        ZUF             ;..:   Br        <br>      7B:        .BM             .i :   B         <br>       BL         ir              i  . BZ         <br>       iB.                        :.  uB          <br>        EB                         . XB.          <br>     7FF8BBr                       iBB            <br>   .Mu.   FBBX: ::             ,.,ZBY             <br>   2u      ENLOBB               2BJ               <br>   FY     .B:  XM                L;               <br>   .Bi    :j8YEB7              :  Zi              <br>    ,BO:     :.B.              r, .B              <br>      rOBY.    B               .J  Pu             <br>        .jMBY.rM                X  .B             <br>            iLBJ                k   Br            <br>" 
fcontent[12]="                                  ,;q:            <br>                         .:rvYJF55jJNU            <br>                   :jkBBBMMPSjY77ii:jE            <br>                vBBBZY:.   ..:::i;irMB            <br>              qBBq:             .,::EBSjL:,..     <br>            vBN:                   ..,r5XPSB2     <br>          :Mu   7i.   .:i           7r.,::L8      <br>         JM:.    rU0MBBZLuvYY7r7,    jS,,7B,      <br>        5E iv     Lri:.  :NL1r:i:     U1:Bv       <br>       rB ,0              .Y:r.        GBB        <br>       B::Mi               .u:J:        B         <br>      :B Li                 .j.U:       8:        <br>      kBB         :r         ,Y.U.      NU        <br>      BB7      .i5MB          7i.U      Y5        <br>      B2i      SB2N7           J :L     XU        <br>      PB,       2Nq.           :r L,    B7        <br>      rB.        0B             Y .v   .B         <br>       B:        .L             :i r.  BM         <br>       iB                        r  : UB          <br>      ,:BB:                      ;  .0B.          <br>    iM1i:jBB                       .BB.           <br>   ,B.     SBS: :,             :,iBBJ             <br>   YB      :B70BB               5BY               <br>   :B,    iBF  MM                L;               <br>    7BL     NMOB7              :  Br              <br>     ,BB;      B.              L:  B              <br>       :BBF    B               :S  0F             <br>         .5BNJBB                0  .B             <br>             ,BY                P.  Bi            <br>" 
fcontent[13]="                                                  <br>                             .,ii7Lk;             <br>                   ,7JPGO8O0E0Zk1Jvu8             <br>                JBB8uvi:.....,.::::LG             <br>              EBBU.             ..:1B.            <br>            7BF.                   .7SqG1JL.      <br>          :EJ    i7:.  .::.          .:;LUB.      <br>         JM. i    .YXZ8M85LULYi;:,    i.:E:       <br>        UP  L:     :r,,...,LJj7:L7    :77M        <br>       iM  F1               ::..       1Br        <br>       B. SO:                :;::       B         <br>      :B.XL                   :i::      0i        <br>      qBMr         r7          i::i     kU        <br>      BB:.      ,jNBk           r.:.    L2        <br>      MU:       NEJ1:           .:.:    1j        <br>      q8,        ZUF             ;..:   Br        <br>      7B:        .BM             .i :   B         <br>       BL         ir              i  . BZ         <br>       iB.                        :.  uB          <br>        EB                         . XB.          <br>     7FF8BBr                       iBB            <br>   .Mu.   FBBX: ::             ,.,ZBY             <br>   2u      ENLOBB               2BJ               <br>   FY     .B:  XM                L;               <br>   .Bi    :j8YEB7              :  Zi              <br>    ,BO:     :.B.              r, .B              <br>      rOBY.    B               .J  Pu             <br>        .jMBY.rM                X  .B             <br>            iLBJ                k   Br            <br>" 
fcontent[14]="                                                  <br>                                 .,.              <br>                   ,77J1F2SXZqEN0X8G              <br>                78BMNU7rii:i:i:i::rO              <br>              FBq:              ..UB              <br>            LBj   .               .FP5Lr,.        <br>          iOY     iv7:,,,:i,        .iU508        <br>         JM. .7     :UX0S17r7rri::     ,YX        <br>        2O  ,k.      :,   ..iJu277r    .Gr        <br>       rB  7Bv               .:,,      rB.        <br>       B  iX7                 .rii.     B         <br>      :M Pk                    .7:i.    Mi        <br>      EBBj.        .7j          ,r,;.   PY        <br>      BNi:       Yq0ZM           ::.i   Lj        <br>      O::i.      2GL8L            r..:  FL        <br>      X2:i        U0G             .; :  Br        <br>      7Bi:.        EB              i  ,.B         <br>       BU:          .              .: .BN         <br>       iBr.                         i 1B          <br>      ::BBX                         .EB.          <br>    iOU:,7BB                       ,BB            <br>   ,B.     FBq: :,             :,:MBL             <br>   YB      :B78BB               kBj               <br>   :B,    :Bu  ZO                Li               <br>    rB7     XENBL              :  8i              <br>     ,BB;      B.              7, .B              <br>       :MB5    B               ,u  N5             <br>         .2BPYBB                q  .B             <br>             ,Bj                q   Bi            <br>" 
fcontent[15]="                                                  <br>                             .,ii7LXr             <br>                   ,7jq8OGOEZ0Zk1Yvu8             <br>                JBB8uvi:.......::i:YG             <br>              0BBu.             ..:1B.            <br>            7MF.                   .7kNZ5JL.      <br>          :EY    ir:.  .::.          .:;vUB.      <br>         JM. i    .YXZ8MG1YUYYir:,    :.:Zi       <br>        UP  L:     :r,,...,LYj7:L7    :77M        <br>       iM  S1               ::,.       2Br        <br>       B. FO:                :r::       B         <br>      :B.PL                   :i::      0i        <br>      qBMr         r7          i::i     Su        <br>      BB:.      ,jNBS           r.:,    L1        <br>      MU:       0EJ1:           .:.:    1j        <br>      N8,        EUF             ;..,   Mr        <br>      7B:        .BM             .i i   B         <br>       Bv         ir              ;  . BG         <br>       iB.                        :.  UB          <br>        0B                         . XB.          <br>     7FS8BBr                       iBB            <br>   .Mu.   FBBX: :,             :,,GBY             <br>   1u      ENL8BB               UBj               <br>   5Y     .B,  XM                L;               <br>   .Bi    :jGY0B7              :  Zi              <br>    ,B8:     :.B.              7,  B              <br>      rMBY.    B               .J  qU             <br>        .uMBY,rM                X  .B             <br>            iYBj                X   Br            <br>" 
closetag='</font>'
var ie4=document.all&&!document.getElementById
var ns4=document.layers
var DOM2=document.getElementById
var index=0
function changecontent(){
if (index>=fcontent.length)
index=0
if (DOM2){
document.getElementById("fscroller").innerHTML=begintag+fcontent[index].replace(/ /g,"&nbsp;")+closetag
}
else if (ie4)
document.all.fscroller.innerHTML=begintag+fcontent[index].replace(/ /g,"&nbsp;")+closetag
else if (ns4){
document.fscrollerns.document.fscrollerns_sub.document.write(begintag+fcontent[index].replace(/ /g,"&nbsp;")+closetag)
document.fscrollerns.document.fscrollerns_sub.document.close()
}
index++
setTimeout("changecontent()",delay)
}
if (ie4||DOM2)
    document.write('<div id="fscroller" style="line-height:70%; text-align:center; color:#3f51b5" ></div>')
window.onload=changecontent
