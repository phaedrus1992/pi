var GetContractListAjax = `
    <input type="hidden" id="marketId" name="marketId" value="3133" />
    <p style="font-size:12px; padding-top:20px;">Trade shares from this page by clicking any price in bold. For more information on an individual prediction, click on the name or image.</p>
    <div class="hidden-xs">
        <div class="panel panel-default activity">
            <div class="panel-body">
                <div class="table-responsive">
                    <table id="contractListTable" class="table">
                        <thead>
                            <tr class="contract-header">
                                <th class="contract-title" style="text-align: left">
                                    <span class="sharesHeader" style="padding-left: 5px;">
                                            <a class="glyphicons refresh" title="Refresh (ALT+R)" accesskey="r" aria-hidden="true" style="padding-left: 20px; color: darkgreen; margin-top: 4px; cursor: pointer" onclick="TradeRefresh()"></a>
                                        BHOSPEECH
                                    </span>
                                </th>

                                    <th class="text-center">Latest</th>
                                    <th class="text-center">Buy Yes</th>
                                    <th class="text-center">Sell Yes</th>
                                    <th class="text-center">Buy No</th>
                                    <th class="text-center">Sell No</th>
                                                                    <th class="text-center">Shares</th>
                                    <th class="text-center">Buy Offers</th>
                                    <th class="text-center">Sell Offers</th>
                            </tr>
                        </thead>
                        <tbody>

                                <tr class="">
                                    <td>
                                        <div id="outcome">
                                            <div class="outcome">
                                                <a href="/Contract/5996/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c500%2c000-or-more-at-auction-in-April">
                                                    <img src="https://az620379.vo.msecnd.net/images/Contracts/small_beec30c1-a10e-4cbb-9bfb-15dd3035a88d.jpg" alt="B1) $1,500,000 or more" width="75" />
                                                </a>
                                            </div>
                                            <div class="outcome-title">
                                                <a href="/Contract/5996/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c500%2c000-or-more-at-auction-in-April">
                                                    <h4>B1) $1,500,000 or more</h4>
                                                    <p>1500.BHOSPEECH</p>
                                                </a>
                                            </div>
                                        </div>
                                    </td>

                                            <td class="text-center">
                                                <b>10<span style="font-family: helvetica;">¢</span></b>
                                                <span style="margin-left: 4px; margin-right: 7px; font-size: 12px">NC</span>
                                            </td>
                                            <td class="text-center"><span class="sharesUp">65<span style="font-family: helvetica;">¢</span></span></td>
                                            <td class="text-center"><span class="sharesUp">5<span style="font-family: helvetica;">¢</span></span></td>
                                            <td class="text-center">
                                                <span class="sharesDown"><a class="showPointer sharesDown" id="buyNo-5996">95<span style="font-family: helvetica;">¢</span></a></span>
                                                <script type="text/javascript">
                                                    $('#buyNo-5996').click(function () {
                                                        openBuyNo(5996);
                                                    });
                                                </script>
                                            </td>
                                            <td class="text-center">
                                                <span class="sharesDown"><a class="showPointer sharesDown" id="sellNo-5996">35<span style="font-family: helvetica;">¢</span></a></span>
                                                <script type="text/javascript">
                                                    $('#sellNo-5996').click(function () {
                                                        openSellNo(5996);
                                                    });
                                                </script>
                                            </td>


                                            <td class="text-center"><a onclick="openOwnership(5996, 'shares')" class="showPointer"><b class="label alert-danger label-lg">50</b></a></td>
                                            <td class="text-center"><b class="label alert-grey label-lg">0</b></td>
                                            <td class="text-center"><b class="label alert-grey label-lg">0</b></td>
                                </tr>
                                <tr class="">
                                    <td>
                                        <div id="outcome">
                                            <div class="outcome">
                                                <a href="/Contract/5997/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c250%2c000-%241%2c500%2c000-at-auction-in-April">
                                                    <img src="https://az620379.vo.msecnd.net/images/Contracts/small_c77e0fc2-6e7f-4630-86c2-94f1aac970c5.jpg" alt="B2) $1,250,000 - $1,500,000" width="75" />
                                                </a>
                                            </div>
                                            <div class="outcome-title">
                                                <a href="/Contract/5997/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c250%2c000-%241%2c500%2c000-at-auction-in-April">
                                                    <h4>B2) $1,250,000 - $1,500,000</h4>
                                                    <p>1250.BHOSPEECH</p>
                                                </a>
                                            </div>
                                        </div>
                                    </td>

                                            <td class="text-center">
                                                <b>2<span style="font-family: helvetica;">¢</span></b>
                                                <span style="margin-left: 4px; margin-right: 7px; font-size: 12px">NC</span>
                                            </td>
                                            <td class="text-center"><span class="sharesUp">79<span style="font-family: helvetica;">¢</span></span></td>
                                            <td class="text-center"><span class="sharesUp">2<span style="font-family: helvetica;">¢</span></span></td>
                                            <td class="text-center">
                                                <span class="sharesDown"><a class="showPointer sharesDown" id="buyNo-5997">98<span style="font-family: helvetica;">¢</span></a></span>
                                                <script type="text/javascript">
                                                    $('#buyNo-5997').click(function () {
                                                        openBuyNo(5997);
                                                    });
                                                </script>
                                            </td>
                                            <td class="text-center">
                                                <span class="sharesDown"><a class="showPointer sharesDown" id="sellNo-5997">21<span style="font-family: helvetica;">¢</span></a></span>
                                                <script type="text/javascript">
                                                    $('#sellNo-5997').click(function () {
                                                        openSellNo(5997);
                                                    });
                                                </script>
                                            </td>


                                            <td class="text-center"><a onclick="openOwnership(5997, 'shares')" class="showPointer"><b class="label alert-danger label-lg">50</b></a></td>
                                            <td class="text-center"><b class="label alert-grey label-lg">0</b></td>
                                            <td class="text-center"><b class="label alert-grey label-lg">0</b></td>
                                </tr>
                                <tr class="">
                                    <td>
                                        <div id="outcome">
                                            <div class="outcome">
                                                <a href="/Contract/5998/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c000%2c000-%241%2c250%2c000-at-auction-in-April">
                                                    <img src="https://az620379.vo.msecnd.net/images/Contracts/small_78d620b8-76a9-406c-99d7-0fc3d83840c4.jpg" alt="B3) $1,000,000 - $1,250,000" width="75" />
                                                </a>
                                            </div>
                                            <div class="outcome-title">
                                                <a href="/Contract/5998/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c000%2c000-%241%2c250%2c000-at-auction-in-April">
                                                    <h4>B3) $1,000,000 - $1,250,000</h4>
                                                    <p>1000.BHOSPEECH</p>
                                                </a>
                                            </div>
                                        </div>
                                    </td>

                                            <td class="text-center">
                                                <b>5<span style="font-family: helvetica;">¢</span></b>
                                                <span style="margin-left: 4px; margin-right: 7px; font-size: 12px">NC</span>
                                            </td>
                                            <td class="text-center"><span class="sharesUp">79<span style="font-family: helvetica;">¢</span></span></td>
                                            <td class="text-center"><span class="sharesUp">5<span style="font-family: helvetica;">¢</span></span></td>
                                            <td class="text-center">
                                                <span class="sharesDown"><a class="showPointer sharesDown" id="buyNo-5998">95<span style="font-family: helvetica;">¢</span></a></span>
                                                <script type="text/javascript">
                                                    $('#buyNo-5998').click(function () {
                                                        openBuyNo(5998);
                                                    });
                                                </script>
                                            </td>
                                            <td class="text-center">
                                                <span class="sharesDown"><a class="showPointer sharesDown" id="sellNo-5998">21<span style="font-family: helvetica;">¢</span></a></span>
                                                <script type="text/javascript">
                                                    $('#sellNo-5998').click(function () {
                                                        openSellNo(5998);
                                                    });
                                                </script>
                                            </td>


                                            <td class="text-center"><a onclick="openOwnership(5998, 'shares')" class="showPointer"><b class="label alert-danger label-lg">50</b></a></td>
                                            <td class="text-center"><b class="label alert-grey label-lg">0</b></td>
                                            <td class="text-center"><b class="label alert-grey label-lg">0</b></td>
                                </tr>
                                <tr class="">
                                    <td>
                                        <div id="outcome">
                                            <div class="outcome">
                                                <a href="/Contract/5999/Will-Obama&#39;s-2008-DNC-speech-sell-for-%24750%2c000-%241%2c000%2c000-at-auction-in-April">
                                                    <img src="https://az620379.vo.msecnd.net/images/Contracts/small_4b129557-04a7-49cc-a16a-585fdf0bc65f.jpg" alt="B4) $750,000 - $1,000,000" width="75" />
                                                </a>
                                            </div>
                                            <div class="outcome-title">
                                                <a href="/Contract/5999/Will-Obama&#39;s-2008-DNC-speech-sell-for-%24750%2c000-%241%2c000%2c000-at-auction-in-April">
                                                    <h4>B4) $750,000 - $1,000,000</h4>
                                                    <p>750.BHOSPEECH</p>
                                                </a>
                                            </div>
                                        </div>
                                    </td>

                                            <td class="text-center">
                                                <b>81<span style="font-family: helvetica;">¢</span></b>
                                                <span style="margin-left: 4px; margin-right: 7px; font-size: 12px">NC</span>
                                            </td>
                                            <td class="text-center"><span class="sharesUp">79<span style="font-family: helvetica;">¢</span></span></td>
                                            <td class="text-center"><span class="sharesUp">3<span style="font-family: helvetica;">¢</span></span></td>
                                            <td class="text-center">
                                                <span class="sharesDown"><a class="showPointer sharesDown" id="buyNo-5999">97<span style="font-family: helvetica;">¢</span></a></span>
                                                <script type="text/javascript">
                                                    $('#buyNo-5999').click(function () {
                                                        openBuyNo(5999);
                                                    });
                                                </script>
                                            </td>
                                            <td class="text-center">
                                                <span class="sharesDown"><a class="showPointer sharesDown" id="sellNo-5999">21<span style="font-family: helvetica;">¢</span></a></span>
                                                <script type="text/javascript">
                                                    $('#sellNo-5999').click(function () {
                                                        openSellNo(5999);
                                                    });
                                                </script>
                                            </td>


                                            <td class="text-center"><a onclick="openOwnership(5999, 'shares')" class="showPointer"><b class="label alert-danger label-lg">5</b></a></td>
                                                    <td class="text-center"><a onclick="openOwnership(5999, 'offered')" class="showPointer"><b class="label alert-danger label-lg">45</b></a></td>
                                                    <td class="text-center"><b class="label alert-grey label-lg">0</b></td>
                                </tr>
                                <tr class="">
                                    <td>
                                        <div id="outcome">
                                            <div class="outcome">
                                                <a href="/Contract/6001/Will-Obama&#39;s-2008-DNC-speech-sell-for-%24500%2c000-%24750%2c000-at-auction-in-April">
                                                    <img src="https://az620379.vo.msecnd.net/images/Contracts/small_8eb520af-95cb-461d-a25b-f52908ef9275.jpg" alt="B5) $500,000 - $750,000" width="75" />
                                                </a>
                                            </div>
                                            <div class="outcome-title">
                                                <a href="/Contract/6001/Will-Obama&#39;s-2008-DNC-speech-sell-for-%24500%2c000-%24750%2c000-at-auction-in-April">
                                                    <h4>B5) $500,000 - $750,000</h4>
                                                    <p>500.BHOSPEECH</p>
                                                </a>
                                            </div>
                                        </div>
                                    </td>

                                            <td class="text-center">
                                                <b>3<span style="font-family: helvetica;">¢</span></b>
                                                <span style="margin-left: 4px; margin-right: 7px; font-size: 12px">NC</span>
                                            </td>
                                            <td class="text-center"><span class="sharesUp">45<span style="font-family: helvetica;">¢</span></span></td>
                                            <td class="text-center"><span class="sharesUp">2<span style="font-family: helvetica;">¢</span></span></td>
                                            <td class="text-center">
                                                <span class="sharesDown"><a class="showPointer sharesDown" id="buyNo-6001">98<span style="font-family: helvetica;">¢</span></a></span>
                                                <script type="text/javascript">
                                                    $('#buyNo-6001').click(function () {
                                                        openBuyNo(6001);
                                                    });
                                                </script>
                                            </td>
                                            <td class="text-center">
                                                <span class="sharesDown"><a class="showPointer sharesDown" id="sellNo-6001">55<span style="font-family: helvetica;">¢</span></a></span>
                                                <script type="text/javascript">
                                                    $('#sellNo-6001').click(function () {
                                                        openSellNo(6001);
                                                    });
                                                </script>
                                            </td>


                                            <td class="text-center"><a onclick="openOwnership(6001, 'shares')" class="showPointer"><b class="label alert-danger label-lg">50</b></a></td>
                                            <td class="text-center"><b class="label alert-grey label-lg">0</b></td>
                                            <td class="text-center"><b class="label alert-grey label-lg">0</b></td>
                                </tr>
                                <tr class="">
                                    <td>
                                        <div id="outcome">
                                            <div class="outcome">
                                                <a href="/Contract/6000/Will-Obama&#39;s-2008-DNC-speech-sell-for-under-%24500%2c000-at-auction-in-April">
                                                    <img src="https://az620379.vo.msecnd.net/images/Contracts/small_0249e9de-3631-4804-b12a-37a3fbd6f266.jpg" alt="B6) Under $500,000" width="75" />
                                                </a>
                                            </div>
                                            <div class="outcome-title">
                                                <a href="/Contract/6000/Will-Obama&#39;s-2008-DNC-speech-sell-for-under-%24500%2c000-at-auction-in-April">
                                                    <h4>B6) Under $500,000</h4>
                                                    <p>499.BHOSPEECH</p>
                                                </a>
                                            </div>
                                        </div>
                                    </td>

                                            <td class="text-center">
                                                <b>16<span style="font-family: helvetica;">¢</span></b>
                                                <span style="margin-left: 4px; margin-right: 7px; font-size: 12px">NC</span>
                                            </td>
                                            <td class="text-center"><span class="sharesUp">40<span style="font-family: helvetica;">¢</span></span></td>
                                            <td class="text-center"><span class="sharesUp">11<span style="font-family: helvetica;">¢</span></span></td>
                                            <td class="text-center">
                                                <span class="sharesDown"><a class="showPointer sharesDown" id="buyNo-6000">89<span style="font-family: helvetica;">¢</span></a></span>
                                                <script type="text/javascript">
                                                    $('#buyNo-6000').click(function () {
                                                        openBuyNo(6000);
                                                    });
                                                </script>
                                            </td>
                                            <td class="text-center">
                                                <span class="sharesDown"><a class="showPointer sharesDown" id="sellNo-6000">60<span style="font-family: helvetica;">¢</span></a></span>
                                                <script type="text/javascript">
                                                    $('#sellNo-6000').click(function () {
                                                        openSellNo(6000);
                                                    });
                                                </script>
                                            </td>


                                            <td class="text-center"><a onclick="openOwnership(6000, 'shares')" class="showPointer"><b class="label alert-danger label-lg">50</b></a></td>
                                            <td class="text-center"><b class="label alert-grey label-lg">0</b></td>
                                            <td class="text-center"><b class="label alert-grey label-lg">0</b></td>
                                </tr>

                            <tr id="showMoreLink" class="hidden" onclick="toggleMore();" style="cursor: pointer">
                                <td id="showMoreLinkContent" colspan="9" style="text-align: center; padding: 10px; background-color: #DDD; color: #167297; font-weight: bold">Show More <span class="glyphicons glyphicon-chevron-down"></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="visible-xs markets-mobile">
        <div id="myShares" class="panel panel-default activity shares-mobile hidden-lg hidden-md hidden-sm">
            <!-- style="max-width: 480px;" -->
            <div class="panel-body">
                <div class="">
                    <table class="table table-striped">
                        <thead>
                            <tr class="contract-header">
                                <th>
                                    <span class="sharesHeader"><a href="/Market/3133/How-much-will-Obama&#39;s-2008-DNC-speech-sell-for-at-auction-in-April" title="BHOSPEECH">BHOSPEECH</a></span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="sMarket">
                                        <table class="sharesMarket">
                                            <tbody>
                                                <tr>
                                                    <td class="shares-icon">
                                                        
                                                        <div class="outcome">
                                                            <a href="/Contract/5996/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c500%2c000-or-more-at-auction-in-April" title="Will Obama&#39;s 2008 DNC speech sell for $1,500,000 or more at auction in April?">
                                                                <img width="100" src="https://az620379.vo.msecnd.net/images/Contracts/small_beec30c1-a10e-4cbb-9bfb-15dd3035a88d.jpg" alt="Will Obama&#39;s 2008 DNC speech sell for $1,500,000 or more at auction in April?">
                                                            </a>
                                                        </div>
                                                        <div class="outcome-title">
                                                            <a href="/Contract/5996/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c500%2c000-or-more-at-auction-in-April" title="Will Obama&#39;s 2008 DNC speech sell for $1,500,000 or more at auction in April?">
                                                                <h4 style="margin-top: 5px; padding-right: 10px">B1) $1,500,000 or more</h4>
                                                                        <p>
                                                                            <b>10<span style="font-family: helvetica;">¢</span></b>
                                                                            <span style="margin-left: 4px; margin-right: 7px; font-size: 12px">NC</span>
                                                                        </p>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" class="shares_info" style="padding-right: 0 !important;">
                                                        <table class="table table-condensed">
                                                            <tbody>
                                                                <tr>
                                                                        <td><b>Shares: </b></td>
                                                                            <td class="text-left"><a onclick="openOwnership(5996)"><b class="label alert-danger label-lg">50</b></a></td>
                                                                                                                                            <td><b>Buy Yes: </b></td>
                                                                            <td class="text-left"><span class="sharesUp">65<span style="font-family: helvetica;">¢</span></span></td>
                                                                        <td><b>Buy No: </b></td>
                                                                            <td class="text-left">
                                                                                <span class="sharesDown"><a onclick="openBuyNo(5996)" class="showPointer sharesDown showForMobile" id="buyNo-5996">95<span style="font-family: helvetica;">¢</span></a></span>
                                                                            </td>
                                                                </tr>
                                                                <tr>
                                                                        <td><b>Offers: </b></td>
                                                                            <td class="text-left"><span class="text-grey">0/0</span></td>

                                                                        <td><b>Sell Yes: </b></td>
                                                                            <td class="text-left"><span class="sharesUp">5<span style="font-family: helvetica;">¢</span></span></td>
                                                                        <td><b>Sell No: </b></td>
                                                                            <td class="text-left">
                                                                                <span class="sharesDown"><a onclick="openSellNo(5996)" class="showForMobile sharesDown" id="sellNo-5996">35<span style="font-family: helvetica;">¢</span></a></span>
                                                                            </td>
                                                                </tr>


                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="sharesMarket">
                                            <tbody>
                                                <tr>
                                                    <td class="shares-icon">
                                                        
                                                        <div class="outcome">
                                                            <a href="/Contract/5997/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c250%2c000-%241%2c500%2c000-at-auction-in-April" title="Will Obama&#39;s 2008 DNC speech sell for $1,250,000 - $1,500,000 at auction in April?">
                                                                <img width="100" src="https://az620379.vo.msecnd.net/images/Contracts/small_c77e0fc2-6e7f-4630-86c2-94f1aac970c5.jpg" alt="Will Obama&#39;s 2008 DNC speech sell for $1,250,000 - $1,500,000 at auction in April?">
                                                            </a>
                                                        </div>
                                                        <div class="outcome-title">
                                                            <a href="/Contract/5997/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c250%2c000-%241%2c500%2c000-at-auction-in-April" title="Will Obama&#39;s 2008 DNC speech sell for $1,250,000 - $1,500,000 at auction in April?">
                                                                <h4 style="margin-top: 5px; padding-right: 10px">B2) $1,250,000 - $1,500,000</h4>
                                                                        <p>
                                                                            <b>2<span style="font-family: helvetica;">¢</span></b>
                                                                            <span style="margin-left: 4px; margin-right: 7px; font-size: 12px">NC</span>
                                                                        </p>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" class="shares_info" style="padding-right: 0 !important;">
                                                        <table class="table table-condensed">
                                                            <tbody>
                                                                <tr>
                                                                        <td><b>Shares: </b></td>
                                                                            <td class="text-left"><a onclick="openOwnership(5997)"><b class="label alert-danger label-lg">50</b></a></td>
                                                                                                                                            <td><b>Buy Yes: </b></td>
                                                                            <td class="text-left"><span class="sharesUp">79<span style="font-family: helvetica;">¢</span></span></td>
                                                                        <td><b>Buy No: </b></td>
                                                                            <td class="text-left">
                                                                                <span class="sharesDown"><a onclick="openBuyNo(5997)" class="showPointer sharesDown showForMobile" id="buyNo-5997">98<span style="font-family: helvetica;">¢</span></a></span>
                                                                            </td>
                                                                </tr>
                                                                <tr>
                                                                        <td><b>Offers: </b></td>
                                                                            <td class="text-left"><span class="text-grey">0/0</span></td>

                                                                        <td><b>Sell Yes: </b></td>
                                                                            <td class="text-left"><span class="sharesUp">2<span style="font-family: helvetica;">¢</span></span></td>
                                                                        <td><b>Sell No: </b></td>
                                                                            <td class="text-left">
                                                                                <span class="sharesDown"><a onclick="openSellNo(5997)" class="showForMobile sharesDown" id="sellNo-5997">21<span style="font-family: helvetica;">¢</span></a></span>
                                                                            </td>
                                                                </tr>


                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="sharesMarket">
                                            <tbody>
                                                <tr>
                                                    <td class="shares-icon">
                                                        
                                                        <div class="outcome">
                                                            <a href="/Contract/5998/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c000%2c000-%241%2c250%2c000-at-auction-in-April" title="Will Obama&#39;s 2008 DNC speech sell for $1,000,000 - $1,250,000 at auction in April?">
                                                                <img width="100" src="https://az620379.vo.msecnd.net/images/Contracts/small_78d620b8-76a9-406c-99d7-0fc3d83840c4.jpg" alt="Will Obama&#39;s 2008 DNC speech sell for $1,000,000 - $1,250,000 at auction in April?">
                                                            </a>
                                                        </div>
                                                        <div class="outcome-title">
                                                            <a href="/Contract/5998/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c000%2c000-%241%2c250%2c000-at-auction-in-April" title="Will Obama&#39;s 2008 DNC speech sell for $1,000,000 - $1,250,000 at auction in April?">
                                                                <h4 style="margin-top: 5px; padding-right: 10px">B3) $1,000,000 - $1,250,000</h4>
                                                                        <p>
                                                                            <b>5<span style="font-family: helvetica;">¢</span></b>
                                                                            <span style="margin-left: 4px; margin-right: 7px; font-size: 12px">NC</span>
                                                                        </p>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" class="shares_info" style="padding-right: 0 !important;">
                                                        <table class="table table-condensed">
                                                            <tbody>
                                                                <tr>
                                                                        <td><b>Shares: </b></td>
                                                                            <td class="text-left"><a onclick="openOwnership(5998)"><b class="label alert-danger label-lg">50</b></a></td>
                                                                                                                                            <td><b>Buy Yes: </b></td>
                                                                            <td class="text-left"><span class="sharesUp">79<span style="font-family: helvetica;">¢</span></span></td>
                                                                        <td><b>Buy No: </b></td>
                                                                            <td class="text-left">
                                                                                <span class="sharesDown"><a onclick="openBuyNo(5998)" class="showPointer sharesDown showForMobile" id="buyNo-5998">95<span style="font-family: helvetica;">¢</span></a></span>
                                                                            </td>
                                                                </tr>
                                                                <tr>
                                                                        <td><b>Offers: </b></td>
                                                                            <td class="text-left"><span class="text-grey">0/0</span></td>

                                                                        <td><b>Sell Yes: </b></td>
                                                                            <td class="text-left"><span class="sharesUp">5<span style="font-family: helvetica;">¢</span></span></td>
                                                                        <td><b>Sell No: </b></td>
                                                                            <td class="text-left">
                                                                                <span class="sharesDown"><a onclick="openSellNo(5998)" class="showForMobile sharesDown" id="sellNo-5998">21<span style="font-family: helvetica;">¢</span></a></span>
                                                                            </td>
                                                                </tr>


                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="sharesMarket">
                                            <tbody>
                                                <tr>
                                                    <td class="shares-icon">
                                                        
                                                        <div class="outcome">
                                                            <a href="/Contract/5999/Will-Obama&#39;s-2008-DNC-speech-sell-for-%24750%2c000-%241%2c000%2c000-at-auction-in-April" title="Will Obama&#39;s 2008 DNC speech sell for $750,000 - $1,000,000 at auction in April?">
                                                                <img width="100" src="https://az620379.vo.msecnd.net/images/Contracts/small_4b129557-04a7-49cc-a16a-585fdf0bc65f.jpg" alt="Will Obama&#39;s 2008 DNC speech sell for $750,000 - $1,000,000 at auction in April?">
                                                            </a>
                                                        </div>
                                                        <div class="outcome-title">
                                                            <a href="/Contract/5999/Will-Obama&#39;s-2008-DNC-speech-sell-for-%24750%2c000-%241%2c000%2c000-at-auction-in-April" title="Will Obama&#39;s 2008 DNC speech sell for $750,000 - $1,000,000 at auction in April?">
                                                                <h4 style="margin-top: 5px; padding-right: 10px">B4) $750,000 - $1,000,000</h4>
                                                                        <p>
                                                                            <b>81<span style="font-family: helvetica;">¢</span></b>
                                                                            <span style="margin-left: 4px; margin-right: 7px; font-size: 12px">NC</span>
                                                                        </p>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" class="shares_info" style="padding-right: 0 !important;">
                                                        <table class="table table-condensed">
                                                            <tbody>
                                                                <tr>
                                                                        <td><b>Shares: </b></td>
                                                                            <td class="text-left"><a onclick="openOwnership(5999)"><b class="label alert-danger label-lg">5</b></a></td>
                                                                                                                                            <td><b>Buy Yes: </b></td>
                                                                            <td class="text-left"><span class="sharesUp">79<span style="font-family: helvetica;">¢</span></span></td>
                                                                        <td><b>Buy No: </b></td>
                                                                            <td class="text-left">
                                                                                <span class="sharesDown"><a onclick="openBuyNo(5999)" class="showPointer sharesDown showForMobile" id="buyNo-5999">97<span style="font-family: helvetica;">¢</span></a></span>
                                                                            </td>
                                                                </tr>
                                                                <tr>
                                                                        <td><b>Offers: </b></td>
                                                                                    <td class="text-left"><a onclick="openOwnership(5999)" class="sharesDown showForMobile">45/0</a></td>

                                                                        <td><b>Sell Yes: </b></td>
                                                                            <td class="text-left"><span class="sharesUp">3<span style="font-family: helvetica;">¢</span></span></td>
                                                                        <td><b>Sell No: </b></td>
                                                                            <td class="text-left">
                                                                                <span class="sharesDown"><a onclick="openSellNo(5999)" class="showForMobile sharesDown" id="sellNo-5999">21<span style="font-family: helvetica;">¢</span></a></span>
                                                                            </td>
                                                                </tr>


                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="sharesMarket">
                                            <tbody>
                                                <tr>
                                                    <td class="shares-icon">
                                                        
                                                        <div class="outcome">
                                                            <a href="/Contract/6001/Will-Obama&#39;s-2008-DNC-speech-sell-for-%24500%2c000-%24750%2c000-at-auction-in-April" title="Will Obama&#39;s 2008 DNC speech sell for $500,000 - $750,000 at auction in April?">
                                                                <img width="100" src="https://az620379.vo.msecnd.net/images/Contracts/small_8eb520af-95cb-461d-a25b-f52908ef9275.jpg" alt="Will Obama&#39;s 2008 DNC speech sell for $500,000 - $750,000 at auction in April?">
                                                            </a>
                                                        </div>
                                                        <div class="outcome-title">
                                                            <a href="/Contract/6001/Will-Obama&#39;s-2008-DNC-speech-sell-for-%24500%2c000-%24750%2c000-at-auction-in-April" title="Will Obama&#39;s 2008 DNC speech sell for $500,000 - $750,000 at auction in April?">
                                                                <h4 style="margin-top: 5px; padding-right: 10px">B5) $500,000 - $750,000</h4>
                                                                        <p>
                                                                            <b>3<span style="font-family: helvetica;">¢</span></b>
                                                                            <span style="margin-left: 4px; margin-right: 7px; font-size: 12px">NC</span>
                                                                        </p>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" class="shares_info" style="padding-right: 0 !important;">
                                                        <table class="table table-condensed">
                                                            <tbody>
                                                                <tr>
                                                                        <td><b>Shares: </b></td>
                                                                            <td class="text-left"><a onclick="openOwnership(6001)"><b class="label alert-danger label-lg">50</b></a></td>
                                                                                                                                            <td><b>Buy Yes: </b></td>
                                                                            <td class="text-left"><span class="sharesUp">45<span style="font-family: helvetica;">¢</span></span></td>
                                                                        <td><b>Buy No: </b></td>
                                                                            <td class="text-left">
                                                                                <span class="sharesDown"><a onclick="openBuyNo(6001)" class="showPointer sharesDown showForMobile" id="buyNo-6001">98<span style="font-family: helvetica;">¢</span></a></span>
                                                                            </td>
                                                                </tr>
                                                                <tr>
                                                                        <td><b>Offers: </b></td>
                                                                            <td class="text-left"><span class="text-grey">0/0</span></td>

                                                                        <td><b>Sell Yes: </b></td>
                                                                            <td class="text-left"><span class="sharesUp">2<span style="font-family: helvetica;">¢</span></span></td>
                                                                        <td><b>Sell No: </b></td>
                                                                            <td class="text-left">
                                                                                <span class="sharesDown"><a onclick="openSellNo(6001)" class="showForMobile sharesDown" id="sellNo-6001">55<span style="font-family: helvetica;">¢</span></a></span>
                                                                            </td>
                                                                </tr>


                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="sharesMarket">
                                            <tbody>
                                                <tr>
                                                    <td class="shares-icon">
                                                        
                                                        <div class="outcome">
                                                            <a href="/Contract/6000/Will-Obama&#39;s-2008-DNC-speech-sell-for-under-%24500%2c000-at-auction-in-April" title="Will Obama&#39;s 2008 DNC speech sell for under $500,000 at auction in April?">
                                                                <img width="100" src="https://az620379.vo.msecnd.net/images/Contracts/small_0249e9de-3631-4804-b12a-37a3fbd6f266.jpg" alt="Will Obama&#39;s 2008 DNC speech sell for under $500,000 at auction in April?">
                                                            </a>
                                                        </div>
                                                        <div class="outcome-title">
                                                            <a href="/Contract/6000/Will-Obama&#39;s-2008-DNC-speech-sell-for-under-%24500%2c000-at-auction-in-April" title="Will Obama&#39;s 2008 DNC speech sell for under $500,000 at auction in April?">
                                                                <h4 style="margin-top: 5px; padding-right: 10px">B6) Under $500,000</h4>
                                                                        <p>
                                                                            <b>16<span style="font-family: helvetica;">¢</span></b>
                                                                            <span style="margin-left: 4px; margin-right: 7px; font-size: 12px">NC</span>
                                                                        </p>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" class="shares_info" style="padding-right: 0 !important;">
                                                        <table class="table table-condensed">
                                                            <tbody>
                                                                <tr>
                                                                        <td><b>Shares: </b></td>
                                                                            <td class="text-left"><a onclick="openOwnership(6000)"><b class="label alert-danger label-lg">50</b></a></td>
                                                                                                                                            <td><b>Buy Yes: </b></td>
                                                                            <td class="text-left"><span class="sharesUp">40<span style="font-family: helvetica;">¢</span></span></td>
                                                                        <td><b>Buy No: </b></td>
                                                                            <td class="text-left">
                                                                                <span class="sharesDown"><a onclick="openBuyNo(6000)" class="showPointer sharesDown showForMobile" id="buyNo-6000">89<span style="font-family: helvetica;">¢</span></a></span>
                                                                            </td>
                                                                </tr>
                                                                <tr>
                                                                        <td><b>Offers: </b></td>
                                                                            <td class="text-left"><span class="text-grey">0/0</span></td>

                                                                        <td><b>Sell Yes: </b></td>
                                                                            <td class="text-left"><span class="sharesUp">11<span style="font-family: helvetica;">¢</span></span></td>
                                                                        <td><b>Sell No: </b></td>
                                                                            <td class="text-left">
                                                                                <span class="sharesDown"><a onclick="openSellNo(6000)" class="showForMobile sharesDown" id="sellNo-6000">60<span style="font-family: helvetica;">¢</span></a></span>
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
                            <tr id="showMoreLinkMobile" class="hidden" onclick="toggleMore();" style="cursor: pointer">
                                <td id="showMoreLinkContentMobile" class="contract-header" style="text-align: center; color: #167297;">Show More <span class="glyphicons glyphicon-chevron-down"></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="yes_long" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="cursor: pointer;">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">Buy Yes</h4>
                </div>
                <div class="modal-body" style="overflow: hidden">
                        <div id="showBuy"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="yes_longsell" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="cursor: pointer;">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">Sell Yes</h4>
                </div>
                <div class="modal-body" style="overflow: hidden">
                        <div id="showlongsell"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="no_short" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="cursor: pointer;">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">Buy No</h4>
                </div>
                <div class="modal-body" style="overflow: hidden">
                        <div id="showSell"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="no_shortsell" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="cursor: pointer;">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">Sell No</h4>
                </div>
                <div class="modal-body" style="overflow: hidden">
                        <div id="showshortsell"></div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(function () {
            if ($(".CanHide.hidden").length > 0) {
                $("#showMoreLink").removeClass("hidden");
                $("#showMoreLinkMobile").removeClass("hidden");
                fixHighlight(true);
            }
        });

        function toggleMore() {
            if ($("#showMoreLinkContent").html() === 'Show More <span class="glyphicons glyphicon-chevron-down"></span>') {
                $(".CanHide").removeClass("hidden");
                $("#showMoreLinkContent").html('Show Fewer <span class="glyphicons glyphicon-chevron-up"></span>');
                $("#showMoreLinkContentMobile").html('Show Fewer <span class="glyphicons glyphicon-chevron-up"></span>');
                fixHighlight(false);
            } else {
                $(".CanHide").addClass("hidden");
                $("#showMoreLinkContent").html('Show More <span class="glyphicons glyphicon-chevron-down"></span>');
                $("#showMoreLinkContentMobile").html('Show More <span class="glyphicons glyphicon-chevron-down"></span>');
                fixHighlight(true);
            }
        };

        function fixHighlight(hidden) {
            $("#contractListTable > tbody > tr").css("background-color", "", "border-top-color", "");

            if (hidden) {
                $("#contractListTable > tbody > tr:not(.CanHide):even").css("background-color", "rgb(249, 249, 249)", "border-top-color", "gray");
            } else {
                $("#contractListTable > tbody > tr:even").css("background-color", "rgb(249, 249, 249)", "border-top-color", "gray");
            }
        }
    </script>
`

export {GetContractListAjax};