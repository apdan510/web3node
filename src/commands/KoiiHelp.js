import React from 'react';

// Create a separate component for the koii help output
const KoiiHelp = React.memo(() => {
  return (
    <pre>
      {`
koii-cli 1.16.2 (src:devbuild; feat:2325450753)
Blockchain, Rebuilt for Scale

USAGE:
    koii [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: /home/koii/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the Koii cluster

SUBCOMMANDS:
    account                              Show the contents of an account
    address                              Get your public key
    address-lookup-table                 Address lookup table management
    airdrop                              Request KOII from a faucet
    authorize-nonce-account              Assign account authority to a new entity
    balance                              Get your balance
    block                                Get a confirmed block
    block-height                         Get current block height
    block-production                     Show information about block production
    block-time                           Get estimated production time of a block
    catchup                              Wait for a validator to catch up to the cluster
    close-vote-account                   Close a vote account and withdraw all funds remaining
    cluster-date                         Get current cluster date, computed from genesis creation time and network
                                         time
    cluster-version                      Get the version of the cluster entrypoint
    completion                           Generate completion scripts for various shells
    config                               Koii command-line tool configuration settings
    confirm                              Confirm transaction by signature
    create-address-with-seed             Generate a derived account address with a seed
    create-nonce-account                 Create a nonce account
    create-stake-account                 Create a stake account
    create-stake-account-checked         Create a stake account, checking the withdraw authority as a signer
    create-vote-account                  Create a vote account
    deactivate-stake                     Deactivate the delegated stake from the stake account
    decode-transaction                   Decode a serialized transaction
    delegate-stake                       Delegate stake to a vote account
    epoch                                Get current epoch
    epoch-info                           Get information about the current epoch
    feature                              Runtime feature management
    fees                                 Display current cluster fees (Deprecated in v1.8.0)
    first-available-block                Get the first available block in the storage
    genesis-hash                         Get the genesis hash
    gossip                               Show the current gossip network nodes
    help                                 Prints this message or the help of the given subcommand(s)
    inflation                            Show inflation information
    largest-accounts                     Get addresses of largest cluster accounts
    leader-schedule                      Display leader schedule
    live-slots                           Show information about the current slot progression
    logs                                 Stream transaction logs
    merge-stake                          Merges one stake account into another
    new-nonce                            Generate a new nonce, rendering the existing nonce useless
    nonce                                Get the current nonce value
    nonce-account                        Show the contents of a nonce account
    ping                                 Submit transactions sequentially
    program                              Program management
    redelegate-stake                     Redelegate active stake to another vote account
    rent                                 Calculate per-epoch and rent-exempt-minimum values for a given account data
                                         field length.
    resolve-signer                       Checks that a signer is valid, and returns its specific path; useful for
                                         signers that may be specified generally, eg. usb://ledger
    slot                                 Get current slot
    split-stake                          Duplicate a stake account, splitting the tokens between the two
    stake-account                        Show the contents of a stake account
    stake-authorize                      Authorize a new signing keypair for the given stake account
    stake-authorize-checked              Authorize a new signing keypair for the given stake account, checking the
                                         authority as a signer
    stake-history                        Show the stake history
    stake-minimum-delegation             Get the stake minimum delegation amount
    stake-set-lockup                     Set Lockup for the stake account
    stake-set-lockup-checked             Set Lockup for the stake account, checking the new authority as a signer
    stakes                               Show stake account information
    supply                               Get information about the cluster supply of KOII
    transaction-count                    Get current transaction count
    transaction-history                  Show historical transactions affecting the given address from newest to
                                         oldest
    transfer                             Transfer funds between system accounts
    upgrade-nonce-account                One-time idempotent upgrade of legacy nonce versions in order to bump them
                                         out of chain blockhash domain.
    validator-info                       Publish/get Validator info on Solana
    validators                           Show summary information about the current validators
    vote-account                         Show the contents of a vote account
    vote-authorize-voter                 Authorize a new vote signing keypair for the given vote account
    vote-authorize-voter-checked         Authorize a new vote signing keypair for the given vote account, checking
                                         the new authority as a signer
    vote-authorize-withdrawer            Authorize a new withdraw signing keypair for the given vote account
    vote-authorize-withdrawer-checked    Authorize a new withdraw signing keypair for the given vote account,
                                         checking the new authority as a signer
    vote-update-commission               Update the vote account's commission
    vote-update-validator                Update the vote account's validator identity
    wait-for-max-stake                   Wait for the max stake of any one node to drop below a percentage of total.
    withdraw-from-nonce-account          Withdraw KOII from the nonce account
    withdraw-from-vote-account           Withdraw roe from a vote account into a specified account
    withdraw-stake                       Withdraw the unstaked KOII from the stake account
    `}
    </pre>
  );
});

export default KoiiHelp;
