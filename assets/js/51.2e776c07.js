(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{433:function(a,t,s){"use strict";s.r(t);var e=s(5),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"staking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[a._v("#")]),a._v(" Staking")]),a._v(" "),s("h2",{attrs:{id:"query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[a._v("#")]),a._v(" Query")]),a._v(" "),s("h3",{attrs:{id:"validators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validators"}},[a._v("#")]),a._v(" Validators")]),a._v(" "),s("p",[a._v("You can query the list of all registered validators:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking validators\n")])])]),s("p",[a._v("If you want to get the information of a single validator you can check it with:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking validator "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h3",{attrs:{id:"delegations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delegations"}},[a._v("#")]),a._v(" Delegations")]),a._v(" "),s("p",[a._v("Once submitted a delegation to a validator, you can see it's information by using the following command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking delegation "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("delegator_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Or if you want to check all your current delegations with distinct validators:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking delegations "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("delegator_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("You can also get previous delegation(s) status by adding the "),s("code",[a._v("--height")]),a._v(" flag.")]),a._v(" "),s("p",[a._v("You can also query all of the delegations to a particular validator:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query delegations-to "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_terraval"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h3",{attrs:{id:"unbonding-delegations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unbonding-delegations"}},[a._v("#")]),a._v(" Unbonding Delegations")]),a._v(" "),s("p",[a._v("Once you begin an unbonding delegation, you can see it's information by using the following command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking unbonding-delegation "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("delegator-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Or if you want to check all your current unbonding-delegations with disctinct validators:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking unbonding-delegations "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account-terra"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Additionally, as you can get all the unbonding-delegations from a particular validator:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking unbonding-delegations-from "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("To get previous unbonding-delegation(s) status on past blocks, try adding the "),s("code",[a._v("--height")]),a._v(" flag.")]),a._v(" "),s("h3",{attrs:{id:"redelegations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redelegations"}},[a._v("#")]),a._v(" Redelegations")]),a._v(" "),s("p",[a._v("Once you begin an redelegation, you can see it's information by using the following command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking redelegation "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("delegator_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("src_val_addr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("dst_val_addr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Or if you want to check all your current unbonding-delegations with distinct validators:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking redelegations "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_terra"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Additionally, as you can get all the outgoing redelegations from a particular validator:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking redelegations-from "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_terraval"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("To get previous redelegation(s) status on past blocks, try adding the "),s("code",[a._v("--height")]),a._v(" flag.")]),a._v(" "),s("h3",{attrs:{id:"staking-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#staking-pool"}},[a._v("#")]),a._v(" Staking Pool")]),a._v(" "),s("p",[a._v("A staking "),s("code",[a._v("Pool")]),a._v(" defines the dynamic parameters of the current state. You can query them with the following command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking pool\n")])])]),s("p",[a._v("With the "),s("code",[a._v("pool")]),a._v(" command you will get the values for:")]),a._v(" "),s("ul",[s("li",[a._v("Not-bonded and bonded tokens")]),a._v(" "),s("li",[a._v("Token supply")]),a._v(" "),s("li",[a._v("Current annual inflation and the block in which the last inflation was processed")]),a._v(" "),s("li",[a._v("Last recorded bonded shares")])]),a._v(" "),s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),s("p",[a._v("Parameters define high-level settings for staking. You can get the current values by using:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking params\n")])])]),s("p",[a._v("The reported parameters will be of the following format:")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("unbonding_time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 504h0m0s\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("max_validators")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("max_entries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("historical_entries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("bond_denom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" uluna\n")])])]),s("h2",{attrs:{id:"transactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[a._v("#")]),a._v(" Transactions")]),a._v(" "),s("h3",{attrs:{id:"create-validator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-validator"}},[a._v("#")]),a._v(" Create validator")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli tx staking create-validator "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --amount"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("5000000uluna "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --pubkey"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("terrad tendermint show-validator"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --moniker"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"choose a moniker"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --website"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"validator.website"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --identity"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"keybase identity"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --details"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"validator\'s optional details"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --commission-rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.10"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --commission-max-rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.20"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --commission-max-change-rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.01"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --min-self-delegation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1"')]),a._v("\n    --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n")])])]),s("h3",{attrs:{id:"edit-validator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edit-validator"}},[a._v("#")]),a._v(" Edit validator")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli tx staking edit-validator "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --moniker"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"new moniker"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --details"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"validator\'s optional details"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --commission-rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.10"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --min-self-delegation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n")])])]),s("p",[a._v("Each of the above flags are all optional and will not be changed if not specified. The new commission rate will be rejected if it contradicts the validator's registered max commission rate and max daily commission rate change.")]),a._v(" "),s("h3",{attrs:{id:"delegate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delegate"}},[a._v("#")]),a._v(" Delegate")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli tx staking delegate "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-addr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("amount"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("ul",[s("li",[s("code",[a._v("validator-addr")]),a._v(": validator operator address to delegate to")]),a._v(" "),s("li",[s("code",[a._v("amount")]),a._v(": coins, i.e. "),s("code",[a._v("1000uluna")])])]),a._v(" "),s("h3",{attrs:{id:"redelegate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redelegate"}},[a._v("#")]),a._v(" Redelegate")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli tx staking redelegate "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("src-validator-addr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("dst-validator-addr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("amount"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("ul",[s("li",[s("code",[a._v("src-validator-addr")]),a._v(": source validator's operator address")]),a._v(" "),s("li",[s("code",[a._v("dst-validator-addr")]),a._v(": destination validator's operator address")]),a._v(" "),s("li",[s("code",[a._v("amount")]),a._v(": coins, i.e. "),s("code",[a._v("1000uluna")])])]),a._v(" "),s("h3",{attrs:{id:"undelegate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undelegate"}},[a._v("#")]),a._v(" Undelegate")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("terracli tx staking unbond "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-addr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("amount"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("ul",[s("li",[s("code",[a._v("validator-addr")]),a._v(": validator operator address from which to undelegate")]),a._v(" "),s("li",[s("code",[a._v("amount")]),a._v(": coins, i.e. "),s("code",[a._v("1000uluna")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);